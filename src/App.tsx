import { useState } from "react";
import "./App.css";
import Card from "./components/library/visual/Card";




function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <img src="./src/assets/PngItem_438051 1.png" alt="" />
      <div>
        <ul>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </ul>

      </div>

    </div>
  );
}

export default App;
