import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//styles
import "../styles/List.css";

//components
import Card from "../components/Cards";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import { FetchToonData } from "../components/Functions";
import {useSearchParams} from 'react-router-dom'

export default function List() {
  const [toonData, setToonData] = useState({
    status: null,
    data: null,
    error: null,
  });
  const [page, setPage] = useState(null);
  const params = useParams();
  const page_no = params.pageno;
  const toonType = params.toonType;
  const [searchParams] = useSearchParams();
  const q = (searchParams.has('s'))? searchParams.get('s') : ''; //query string for search bar
  useEffect(() => {
    setToonData({ status: "loading" });
    const fetchData = async () => {
      const res = await FetchToonData(toonType, page_no,q);
      if (res.status) {
        setToonData({
          status: "success",
          data: res.data.data,
        });
        setPage(res.data.pagination);
      } else {
        setToonData({ status: "error", error: res.error });
      }
    };
    fetchData();
    document.title =
      page_no === 1
        ? "Anime Info | Anime List "
        : `Toons Info | Page No. ${page_no}`;
      }, [toonType, page_no]);

  if (toonData.status === "loading") return <Loading />;
  else if (
    toonData.status === "success" &&
    toonData.data !== undefined &&
    toonData.data.length !== 0
  ) {
    return (
      <div id="list" className="container">
        <div className="list">
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
        {!page ? null : (
          <Pagination
            toonType={toonType}
            has_next_page={page.has_next_page}
            current_page={page.current_page}
          />
        )}
      </div>
    );
  } else 
    return <center> No {toonType} Found</center>;
}
