import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import Characters from "./subpages/characters/Characters";
import { Route, Routes } from "react-router-dom";
import Episodes from "./subpages/episodes/Episodes";
import Locations from "./subpages/locations/Locations";
import CharactersDetail from "./subpages/characters/CharactersDetail";
import LocationsDetail from "./subpages/locations/LocationsDetail";
import EpisodesDetail from "./subpages/episodes/EpisodeDetail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/Locations" element={<Locations />} />
        <Route path="/Episodes" element={<Episodes />} />
        <Route path="/CharactersDetail" element={<CharactersDetail />} />
        <Route path="/LocationsDetail" element={<LocationsDetail  />} />
        <Route path="/EpisodesDetail" element={<EpisodesDetail  />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
