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
          <a className="navbar-brand me-2" to="/main/Home">
            <img
              src="/logo/logo.png"
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
            <ul className="navbar-nav mb-2 mb-lg-0" style={{ fontSize: 18 }}>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/about">
                  About
                </NavLink>
              </li>

              {/* Navbar dropdown */}
              <li class="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown"
                  to="/main/course"
                  id="navbarDropdown"
                  role="button"
                  aria-expanded="false"
                >
                  Courses
                </NavLink>
                {/* Dropdown menu */} 
                <ul className="dropdown-menu text-center" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/main/course">Action</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/main/chapter">Another action</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/trainer/builder">Action</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/trainer/managechapter">Another action</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/main/contact">
                  Contact
                </NavLink>
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
                className="fas fa-user fa-lg me-1 fa-fw"
              />
              Sign Up
            </a>

            <a
              class="nav-btn btn-link"
              href="/main/Login"
            >
              <i
                className="fas fa-right-to-bracket fa-lg me-1 fa-fw"
              />
              Login
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