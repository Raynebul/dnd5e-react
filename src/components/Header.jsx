import { useState } from "react";

function Header() {
  const [count, setCount] = useState(0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-very-dark mx-5 pt-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          D&D 5e - Справочник на русском языке
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="ms-auto navbar-text text-light">
            <i className="bi bi-moon"></i>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
