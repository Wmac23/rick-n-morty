import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import FrontPage from "./components/library/frontpage/frontpage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />

      <div className="App">
        <FrontPage/>
      </div>
      <Footer />
    </>
  );
}

export default App;
