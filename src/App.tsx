import { useState } from "react";
import "./App.css";
import Card from "./components/library/visual/Card";

import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />

      <div className="App">
        <img src="./src/assets/PngItem_438051 1.png" alt="" />
        <div>
          <ul>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
