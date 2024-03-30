import { useParams, Outlet } from "react-router-dom";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import "../styles/Show.css";

export default function ShowManga() {
  const params = useParams();
  document.title = `${params.mangaName} | Manga Info`;
  const [mangaData, setMangaData] = useState({
    status: "loading",
    data: {
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
        type: "Manga",
        chapters: 0,
        volumes: 0,
        status: "Finished",
        publishing: true,
        published: {
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
        score: 0,
        scored_by: 0,
        rank: 0,
        popularity: 0,
        members: 0,
        favorites: 0,
        synopsis: "string",
        background: "string",
        authors: [
          {
            mal_id: 0,
            type: "string",
            name: "string",
            url: "string",
          },
        ],
        serializations: [
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
        external: [
          {
            name: "string",
            url: "string",
          },
        ],
      },
    },
    error: null,
  });

  function getAnimeById(id) {
    try {
      fetch(`https://api.jikan.moe/v4/manga/${id}/full`)
        .then((res) => res.json())
        .then((data) =>
          setMangaData({
            status: "sucess",
            data: data.data,
            error: null,
          })
        );
    } catch (error) {
      setMangaData({
        status: "error",
        data: null,
        error: error.message,
      });
    }
  }

  useEffect(() => {
    getAnimeById(params.mangaId);
  }, []);

  if (mangaData.status === "loading") {
    return <Loading />;
  }
  return (
    <div className='main-container'>
      <section className='show-main'>
        <div className='show-header'>
          <div className='show-header-img'>
            <img
              src={mangaData.data.images.jpg.image_url}
              alt={mangaData.data.title_english}
            />
          </div>
          <div className='show-header-body'>
            <div className='show-header-body-title'>
              {mangaData.data.title}
              <div className='show-header-body-sub-title'>
                {mangaData.data.title_japanese}
              </div>
            </div>
            <div className='show-header-body-rating'>
              Rating: {mangaData.data.rating}
            </div>
          </div>
        </div>
        <div className='show-body'>
          <details className="details" open>
            <summary>Short Story</summary>
            <p>{mangaData.data.synopsis}</p>
          </details>
          <details className="details" open>
            <summary>About</summary>
            <p>{mangaData.data.background}</p>
          </details>
          <table className='table'>
            <thead>
              <tr>
                <th colSpan={2}>{mangaData.data.title_english}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Status</th>
                <td>{mangaData.data.status}</td>
              </tr>
              <tr>
                <th>Genres</th>
                <td>{mangaData.data.genres.map((g) => g.name).join(", ")}</td>
              </tr>
              <tr>
                <th>Themes</th>
                <td>{mangaData.data.themes.map((t) => t.name).join(", ")}</td>
              </tr>
              <tr>
                <th>chapters</th>
                <td>{mangaData.data.chapters}</td>
              </tr>
              <tr>
                <th>Volumes</th>
                <td>{mangaData.data.volumes}</td>
              </tr>
              <tr>
                <th>Published</th>
                <td>{mangaData.data.published.string}</td>
              </tr>
              <tr>
                <th>Rating</th>
                <td>{mangaData.data.score}</td>
              </tr>
              <tr>
                <th>Author</th>
                <td>{mangaData.data.authors.name}</td>
              </tr>
              <tr>
                <th>Demogarphics</th>
                <td>{mangaData.data.demographics.name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
