import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <nav className="Navv navbar navbar-expand-md navbar-light">
        <div className="container-fluid justify-content-start">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="Logo navbar-brand col-auto"
            href="#"
            data-content="Logo"
          >
            <img src alt="logo" />
            <span data-lang="es">Nombre</span>
            <span data-lang="en">Nombre</span>
            <span data-lang="fr">Nombre</span>
            <span data-lang="de">Nombre</span>
            <span data-lang="br">Nombre</span>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <span className="nav-link active" aria-current="page" href="#">
                Home
              </span>
              <span className="nav-link" href="#">
                Features
              </span>
              <span className="nav-link" href="#">
                Pricing
              </span>
              <span className="nav-link" href="#">
                Pricing
              </span>
              <div id="floor" className="nav-floor expand-md-hidden" />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
