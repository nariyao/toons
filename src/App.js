import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/App.css";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import List from "./Pages/List";
import ShowAnime from "./Pages/ShowAnime";
import ShowManga from "./Pages/ShowManga";


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:toonType/page/:pageno" element={<List />} />
        <Route path="anime/:animeId/:animeName" element={<ShowAnime />} />
        <Route path="manga/:mangaId/:mangaName"  element={<ShowManga />} />
      </Routes>
    </Router>
  );
}

export default App;
