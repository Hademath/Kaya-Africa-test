import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

// import { FaBars } from "react-icons/fa";

function NavBarComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const openSidebar = {
    onClick: () => setIsOpen(!isOpen),
  };
  return (
    <>
      <div className="nav-center">
        <div className="nav-header">
                  <Link to="/">
           FASHION LOGO
            {/* <img href="/" src="#" alt="logo" /> */}

          </Link>
          <button
            type="button"
            className="nav-toggle"
            onClick={openSidebar.onClick}
          >
            {/* <FaBars /> */}
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shopping">Buy Cloth </Link>
          </li>
        
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Sign Up Free</Link>
          </li>
        </ul>

        <div className="button_create">
          <button className="btn btn-primary">
            <Link to="/shopping">Shopping Now</Link>
          </button>
        </div>
      </div>
    </>
  );
}
export default NavBarComponent;
