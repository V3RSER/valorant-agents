import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarCollapse"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Agentes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/role/iniciador">
                Iniciador
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/role/duelista">
                Duelista
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/role/centinela">
                Centinela
              </NavLink>
            </li>{" "}
            <li className="nav-item ">
              <NavLink className="nav-link" to="/role/controlador">
                Controlador
              </NavLink>
            </li>
          </ul>
          <form className="form-inline mt-2 mt-md-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Buscar agentes"
              aria-label="Buscar"
            ></input>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Buscar
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;
