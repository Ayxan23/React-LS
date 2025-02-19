import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/admin/posts"} className="nav-link">
                  Posts
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header