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
import { gql, useQuery } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
      }
    }
  }
`;

function App() {
  const [count, setCount] = useState(0);
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/Locations" element={<Locations />} />
        <Route path="/Episodes" element={<Episodes />} />
        {data.characters.results.map(({ id }) => (
          <Route
            path={"/CharactersDetail/" + id}
            element={<CharactersDetail />}
          />
        ))}
        <Route path="/LocationsDetail" element={<LocationsDetail />} />
        <Route path="/EpisodesDetail" element={<EpisodesDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
