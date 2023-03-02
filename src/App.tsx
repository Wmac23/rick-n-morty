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

const GET_RESULTS = gql`
  query {
    characters {
      results {
        id
      }
    }
    episodes{
      results{
        id
      }
    }
    locations{
      results{
        id
      }
    }
  }
`;


function App() {
  const [count, setCount] = useState(0);
  const { loading, error, data } = useQuery(GET_RESULTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Characters />} />
        {data.characters.results.map(({ id }) => (
          <Route
            path={"/CharactersDetail/" + id}
            element={<CharactersDetail />}
          />
        ))}

        <Route path="/Locations" element={<Locations />} />
        {data.locations.results.map(({ id }) => (
          <Route
            path={"/LocationsDetail/" + id}
            element={<LocationsDetail />}
          />
        ))}

        <Route path="/Episodes" element={<Episodes />} />
        {data.episodes.results.map(({ id }) => (
          <Route
            path={"/EpisodeDetail/" + id}
            element={<EpisodesDetail />}
          />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
