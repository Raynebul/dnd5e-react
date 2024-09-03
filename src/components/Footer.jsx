import { useState } from "react";

function Footer() {
  return (
    <footer className="text-center text-lg-start">
      <div className="text-center p-3">
        <a
          className=" link-offset-2 link-underline link-underline-opacity-0"
          href="https://github.com/Raynebul/dnd5e-react"
        >
          <i className="bi bi-code-slash pe-1"></i>Код проекта
        </a>
      </div>
    </footer>
  );
}

export default Footer;
