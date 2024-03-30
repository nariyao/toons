import { useParams, Outlet } from "react-router-dom";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import "../styles/Show.css";

export default function ShowAnime() {
  const params = useParams();
  document.title = `${params.animeName} | Anime Info`;
  const [animeData, setAnimeData] = useState({
    status: "loading",
    data: {
      mal_id: 0,
      url: "string",
      images: {
        jpg: {
          image_url: "string",
          small_image_url: "string",
          large_image_url: "string",
        },
        webp: {
          image_url: "string",
          small_image_url: "string",
          large_image_url: "string",
        },
      },
      trailer: {
        youtube_id: "string",
        url: "string",
        embed_url: "string",
      },
      approved: true,
      titles: [
        {
          type: "string",
          title: "string",
        },
      ],
      title: "string",
      title_english: "string",
      title_japanese: "string",
      title_synonyms: ["string"],
      type: "TV",
      source: "string",
      episodes: 0,
      status: "Finished Airing",
      airing: true,
      aired: {
        from: "string",
        to: "string",
        prop: {
          from: {
            day: 0,
            month: 0,
            year: 0,
          },
          to: {
            day: 0,
            month: 0,
            year: 0,
          },
          string: "string",
        },
      },
      duration: "string",
      rating: "G - All Ages",
      score: 0,
      scored_by: 0,
      rank: 0,
      popularity: 0,
      members: 0,
      favorites: 0,
      synopsis: "string",
      background: "string",
      season: "summer",
      year: 0,
      broadcast: {
        day: "string",
        time: "string",
        timezone: "string",
        string: "string",
      },
      producers: [
        {
          mal_id: 0,
          type: "string",
          name: "string",
          url: "string",
        },
      ],
      licensors: [
        {
          mal_id: 0,
          type: "string",
          name: "string",
          url: "string",
        },
      ],
      studios: [
        {
          mal_id: 0,
          type: "string",
          name: "string",
          url: "string",
        },
      ],
      genres: [
        {
          mal_id: 0,
          type: "string",
          name: "string",
          url: "string",
        },
      ],
      explicit_genres: [
        {
          mal_id: 0,
          type: "string",
          name: "string",
          url: "string",
        },
      ],
      themes: [
        {
          mal_id: 0,
          type: "string",
          name: "string",
          url: "string",
        },
      ],
      demographics: [
        {
          mal_id: 0,
          type: "string",
          name: "string",
          url: "string",
        },
      ],
      relations: [
        {
          relation: "string",
          entry: [
            {
              mal_id: 0,
              type: "string",
              name: "string",
              url: "string",
            },
          ],
        },
      ],
      theme: {
        openings: ["string"],
        endings: ["string"],
      },
      streaming: [
        {
          name: "string",
          url: "string",
        },
      ],
    },
    error: null,
  });

  function getAnimeById(id) {
    try {
      fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
        .then((res) => res.json())
        .then((data) =>
          setAnimeData({
            status: "sucess",
            data: data.data,
            error: null,
          })
        );
    } catch (error) {
      setAnimeData({
        status: "error",
        data: null,
        error: error.message,
      });
    }
  }

  useEffect(() => {
    getAnimeById(params.animeId);
  }, []);

  if (animeData == null) {
    return <Loading />;
  }
  return (
    <div className='main-container'>
      <section className='show-main'>
        <div className='show-header'>
          <div className='show-header-img'>
            <img
              src={animeData.data.images.webp.image_url}
              alt={animeData.data.title_english}
            />
          </div>
          <div className='show-header-body'>
            <div className='show-header-body-title'>
              {animeData.data.title}
              <div className='show-header-body-sub-title'>
                {animeData.data.title_japanese}
              </div>
            </div>
            <div className='show-header-body-rating'>
              Rating: {animeData.data.rating}
            </div>
          </div>
        </div>
        <div className='show-body'>
          <details className='details' open>
            <summary>Short Story</summary>
            <p>{animeData.data.synopsis}</p>
          </details>
          <details className='details' open>
            <summary>About</summary>
            <p>{animeData.data.background}</p>
          </details>
          <table className='table'>
            <thead>
              <tr>
                <th colSpan={2}>{animeData.data.title_english}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Status</td>
                <td>{animeData.data.status}</td>
              </tr>
              <tr>
                <td>Aired</td>
                <td>{animeData.data.aired.string}</td>
              </tr>
              <tr>
                <td>Rating</td>
                <td>{animeData.data.rating}</td>
              </tr>
              <tr>
                <td>Genres</td>
                <td>{animeData.data.genres.map(e=>e.name).join(', ')}</td>
              </tr>
              <tr>
                <td>Themes</td>
                <td>{animeData.data.themes.map(e=>e.name).join(', ')}</td>
              </tr>
              <tr>
                <td>Episodes</td>
                <td>{animeData.data.episodes}</td>
              </tr>
              <tr>
                <td>Duration</td>
                <td>{animeData.data.duration}</td>
              </tr>
              <tr>
                <td>Producers</td>
                <td>{animeData.data.producers.map(p=>p.name).join(", ")}</td>
              </tr>
              <tr>
                <td>Licensors</td>
                <td>{animeData.data.licensors.map(l=>l.name).join(", ")}</td>
              </tr>
              <tr>
                <td>Studios</td>
                <td>{animeData.data.studios.map(l=>l.name).join(", ")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
