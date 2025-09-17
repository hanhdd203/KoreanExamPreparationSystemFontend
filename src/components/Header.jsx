import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <h2 className="m-0 text-primary">
          <i className="fa fa-book me-3"></i>eLEARNING
        </h2>
      </Link>
      <button
        className="navbar-toggler me-4"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">

          {/* Dùng NavLink để tự động thêm class active */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              "nav-item nav-link" + (isActive ? " active" : "")
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              "nav-item nav-link" + (isActive ? " active" : "")
            }
          >
            About
          </NavLink>

          <NavLink
            to="/courses"
            className={({ isActive }) =>
              "nav-item nav-link" + (isActive ? " active" : "")
            }
          >
            Courses
          </NavLink>

          {/* Dropdown menu */}
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              id="pagesDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Pages
            </a>
            <ul className="dropdown-menu fade-down m-0" aria-labelledby="pagesDropdown">
              <li>
                <NavLink
                  to="/team"
                  className={({ isActive }) =>
                    "dropdown-item" + (isActive ? " active" : "")
                  }
                >
                  Our Team
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/testimonial"
                  className={({ isActive }) =>
                    "dropdown-item" + (isActive ? " active" : "")
                  }
                >
                  Testimonial
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/404"
                  className={({ isActive }) =>
                    "dropdown-item" + (isActive ? " active" : "")
                  }
                >
                  404 Page
                </NavLink>
              </li>
            </ul>
          </div>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              "nav-item nav-link" + (isActive ? " active" : "")
            }
          >
            Contact
          </NavLink>
        </div>

        <NavLink to="/join" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
          Join Now <i className="fa fa-arrow-right ms-3"></i>
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
