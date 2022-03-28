import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();

  const handleClickFavorite = () => {
    navigate("/favorites");
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
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
          <button
              className="btn btn-danger my-1 mr-5 "
              onClick={() => handleClickFavorite()}
            >
              Favoritos
            </button>

          <form className="form-inline my-1">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Buscar agentes"
              aria-label="Buscar"
            ></input>
            <button
              className="btn btn-success my-2 my-sm-0"
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
