import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Footer />
    </>
  );
}

export default App;
