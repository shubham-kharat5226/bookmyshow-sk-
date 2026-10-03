import "../styles/Navbar.css";
import logo from "../assets/bookMyShow-Logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar-body">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="BookMyShow Logo" />
          </Link>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search for Movies"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>

            <ul className="btn-list">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/addMove">
                      Admin Page
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <Link class="dropdown-item" href="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link-login active" href="/">
                  <button className="btn btn-danger btn-sm">Login</button>
                </a>
                <a className="nav-link active" href="/">
                  <button className="btn btn-danger btn-sm">sign in</button>
                </a>
              </li>
            </ul>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <div className="options-list">
        <div>
          <p>Movies</p>
          <p>Stream</p>
          <p>Events</p>
          <p>plays</p>
          <p>Sports</p>
          <p>Activites</p>
        </div>
        <div>
          <p>ListYourShow</p>
          <p>Corporates</p>
          <p>Offers</p>
          <p>Gift Cards</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
