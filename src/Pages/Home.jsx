import React, { useState } from "react";

//components
import { useSearchParams } from "react-router-dom";
import "../styles/Home.css";
import CardList from "../components/CardList";

export default function Home() {
  const [searchParams] = useSearchParams();
  let filterUrl = "limit=10";
  if (searchParams.get("s"))
    filterUrl = `${filterUrl}&q=${searchParams.get("s")}`;
  return (
    <div id="home">
      <CardList toonType="anime" filter_url={filterUrl} />
      <CardList toonType="manga" filter_url={filterUrl} />
    </div>
  );
}
