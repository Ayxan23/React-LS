import React, { useContext } from "react";
import MainContext from "../context/MainContext";
import { Link } from "react-router-dom";

const Header = () => {
  const context = useContext(MainContext);
  /*  <div>Header counter: {context.counter}</div>;*/
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/basket">
                Basket
              </Link>
            </li>
            <li className="nav-item">
              <p className="nav-link">Basket Items: {context.basketItems.length}</p>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
