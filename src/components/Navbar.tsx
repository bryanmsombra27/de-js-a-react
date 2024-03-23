import { FC } from "react";
import { NavLink } from "react-router-dom";

interface NavbarProps {}
const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger bg-gradient p-3">
        <div className="container-fluid">
          <NavLink
            className="navbar-brand fs-4"
            to="/"
          >
            Buscador de Recetas
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link fs-4 active"
                  aria-current="page"
                  to="/"
                >
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fs-4"
                  to="/favoritos"
                >
                  Mis Favoritos
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
