import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Body from "./components/Body.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container-fluid min-vh-100 d-flex-column px-0 bg-very-dark">
      <Header />
      <Body />
      <Footer />
      {/* <div className="text-white h2 mx-auto mt-5">ТЕСТОВЫЙ ПРОЕКТ НА <span className="text-info">REACT.JS</span></div>*/}
    </div>
  );
}

export default App;
