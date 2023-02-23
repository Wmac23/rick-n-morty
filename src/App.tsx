import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import FrontPage from "./components/library/frontpage/frontpage";
import LoadButton from "./components/library/buttons/LoadButton/LoadButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />

      <div className="App">
        <FrontPage/>
      </div>
      <LoadButton />
      <Footer />
    </>
  );
}

export default App;
