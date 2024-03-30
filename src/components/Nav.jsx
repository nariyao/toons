import React from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import "./styles/Nav.css";


export default function Nav() {
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "var(--c4)" : "#fff",
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "underline" : "none",
    };
  };
  return (
    <div className="navbar">
      <NavLink to="/" className="brand">
        <div className="brand-logo">
          <img src="" alt="" />
        </div>
        <div className="brand-name">Toons Info</div>
      </NavLink>
      <form action="/" className="search">
        <input
          type="search"
          name="s"
          id="search"
          placeholder="Search..."
          aria-placeholder="Search..."
          title="Search..."
        />
        <input type="submit" value="Search" />
      </form>
      <img src="" alt="" />
      <div className="menu">
        <ul>
          <li>
            <NavLink style={navLinkStyle} to="/" title="Home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyle} to="/anime/page/1">
              Anime
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyle} to="/manga/page/1">
              Manga
            </NavLink>
          </li>
          {/* <li></li> */}
        </ul>
      </div>
    </div>
  );
}
