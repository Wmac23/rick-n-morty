import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import FrontPage from "./subpages/characters/Characters";
import LoadButton from "./components/library/buttons/LoadButton/LoadButton";
import Characters from "./subpages/characters/Characters";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Characters />
      <Footer />
    </>
  );
}

export default App;
