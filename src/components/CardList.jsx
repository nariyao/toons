import React, { useState, useEffect } from "react";
import Card from "./Cards";
import "./styles/CardList.css";
import { FetchToonData, Sleep } from "./Functions";
// import ErrorPage from "./ErrorPage";
import Loading from "./Loading";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function CardList({ toonType, filter_url }) {
  const [toonData, setToonData] = useState({
    status: null,
    data: null,
    error: null,
  });
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const q = searchParams.has("s") ? searchParams.get("s") : ""; //query string for search bar
  useEffect(() => {
    setToonData({ status: "loading" });
    const fetchData = async () => {
      await Sleep(Math.round(Math.random() * 5000));
      try {
        const res = await FetchToonData(toonType, 1, filter_url);
        if (res.status) {
          setToonData({
            status: "success",
            data: res.data.data,
          });
        } else setToonData({ status: "error", error: res.error });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    document.title = "Home";
  }, []);
  if (toonData.status === "loading") {
    return <Loading />;
  } else if (
    toonData.status === "success" &&
    toonData.data !== undefined &&
    toonData.data.length !== 0
  ) {
    return (
      <div className='cardlist'>
        <div className='cardlist-head'>
          <div className='cardlist-head-title'>{toonType}</div>
          <button
            className='cardlist-head-btn btn'
            onClick={() => {
              navigate(`/${toonType}/page/1?s=${q}`);
            }}
          >
            More
          </button>
        </div>
        <div className='cardlist-content'>
          {toonData.data.map((data) => (
            <Card
              key={data.mal_id}
              id={data.mal_id}
              title={data.title}
              img={data.images.webp.image_url}
              type={toonType}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <> No {toonType} Found</>;
  }
}
