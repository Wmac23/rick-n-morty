import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import FrontPage from "./subpages/characters/Characters";
import LoadButton from "./components/library/buttons/LoadButton/LoadButton";
import Characters from "./subpages/characters/Characters";
import { Route, Routes } from "react-router-dom";
import Episodes from "./subpages/episodes/Episodes";
import Locations from "./subpages/locations/Locations";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/Locations" element={<Locations />} />
        <Route path="/Episodes" element={<Episodes />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
