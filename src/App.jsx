import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Body from "./components/Body.jsx";
import DicePage from "./components/DicePage.jsx";

function App() {
  const [count, setCount] = useState(0);

  const [theme, setTheme] = useState("dnd-dark");
  const [btnTheme, setBtnTheme] = useState("light");
  const ChangeTheme = () => {
    if (theme === "dnd-dark") {
      setTheme("dnd-light");
      setBtnTheme("dark")
    } else {
      setTheme("dnd-dark");
      setBtnTheme("light")
    }
  };

  return (
    <div data-bs-theme={theme}>
      <div className="container-fluid min-vh-100 d-flex-column px-0 bg-dnd">
        <Header changeTheme={ChangeTheme} theme={theme} />
        <BrowserRouter>
          <Routes>
            <Route path="/dnd5e-react" element={<Body />} />
            <Route path="/dnd5e-react/dice" element={<DicePage theme={btnTheme}/>} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
