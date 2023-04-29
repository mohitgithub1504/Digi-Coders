import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (

    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Container wrapper */}
        <div className="container">
          {/* Navbar brand */}
          <a className="navbar-brand me-2" href="#">
            <img
              src="/logo/png/logo-no-background.png"
              height={50}
              alt="Digi Coders Logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
            />
          </a>
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarButtonsExample">
            {/* Left links */}
            <ul className="navbar-nav mb-2 mb-lg-0" style={{ fontSize: 18}}>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>

              {/* Navbar dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                </a>
                {/* Dropdown menu */}
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>

          </div>
          {/* Collapsible wrapper */}

          {/* Left links */}
          <div className="d-flex align-items-center">
            <a
              class="nav-btn btn-link"
              href="/main/Signup"
            >
              <i
                className="fa-solid fa-user fa-2xl"
                style={{ color: "#fff" }}
              />
            </a>

            <a
              class="nav-btn btn-link"
              href="/main/Login"
            >
              <i
                className="fa-solid fa-right-to-bracket fa-2xl"
                style={{ color: "#fff" }}
              />
            </a>
          </div>

        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>

  )
}

export default Navbar