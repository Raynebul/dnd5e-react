import { useState } from "react";

function Header(props) {
  const [count, setCount] = useState(0);

  const ChangeTheme = () => {
    props.changeTheme();
  };

  const BiStyle = (props.theme === "dnd-dark") ? "bi bi-sun" : "bi bi-moon";

  return (
    <nav className="navbar navbar-expand-lg mx-5 pt-4">
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
            <button className="btn btn-icon" onClick={ChangeTheme}>
              {" "}
              <i className={BiStyle}></i>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
