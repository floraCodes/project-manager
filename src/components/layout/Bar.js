import React from "react";

const Bar = () => {
  return (
    <header className="app-header">
      <p className="nombre-usuario">
        Hola, <span>Florencia</span>
      </p>
      <nav className="nav-principal">
        <a href="#!">Sign Out</a>
      </nav>
    </header>
  );
};

export default Bar;
