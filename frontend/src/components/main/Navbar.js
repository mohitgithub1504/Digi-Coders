import React from 'react'
import { NavLink } from 'react-router-dom'
import UserProvider, { useUserContext } from '../../context/UserContext';

const Navbar = () => {

  const { loggedIn, logout } = useUserContext();
  // const { currentUser } = useUserContext();

  return (

    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Container wrapper */}
        <div className="container">
          {/* Navbar brand */}
          <NavLink className="navbar-brand me-2" to="/main/home">
            <img
              src="/logo/logo.png"
              height={50}
              alt="Digi Coders Logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
            />
          </NavLink>
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
              <li class="dropdown nav-item">
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
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
                  <li>
                    <NavLink className="dropdown-item" to="/user/viewchapters">HTML</NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/user/viewchapters">JavaScript</NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/user/viewchapters">Python</NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/user/viewchapters">Game Development</NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/user/viewchapters">Web Development</NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/user/viewchapters">Roblox</NavLink>
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
            {
              !loggedIn ? (
                <>
                  <a
                    class="nav-btn btn-link"
                    href="/main/signup"
                  >
                    <i
                      className="fas fa-user fa-lg me-1 fa-fw"
                    />
                    Sign Up
                  </a>

                  <a
                    class="nav-btn btn-link"
                    href="/main/login"
                  >
                    <i
                      className="fas fa-right-to-bracket fa-lg me-1 fa-fw"
                    />
                    Login
                  </a>
                </>
              ) :
                (

                  <>
                    <img
                      src="https://www.bootdey.com/img/Content/avatar/avatar6.png"
                      className="rounded-circle"
                      style={{ width: "50px", backgroundSize: "cover" }}
                      alt="Black and White Portrait of a Man"
                      loading="lazy"
                    />
                    <div className="dropdown">
                      <NavLink
                        className="dropdown-toggle d-flex align-items-center hidden-arrow"
                        to="#"
                        id="navbarDropdownMenuAvatar"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <NavLink className='nav-avatar align-items-center ms-2'>
                          {/* <span className="text-dark">{currentUser.name}</span> */}
                          <i className="fas fa-caret-down ms-2" />
                        </NavLink>
                      </NavLink>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuAvatar"
                      >
                        <li>
                          <NavLink className="dropdown-item" to="/user/userprofile">
                            <i
                              className="far fa-user me-2 fa-fw"
                            />
                            Profile
                          </NavLink>
                        </li>
                        <li>
                          <a className="dropdown-item" type='button' onClick={logout}>
                            <i
                              className="fas fa-power-off me-2 fa-fw"
                            />
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </>
                )
            }
          </div>

        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>

  )
}

export default Navbar