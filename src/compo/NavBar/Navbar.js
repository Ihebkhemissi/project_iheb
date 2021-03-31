import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="menu-icon">
          <span className="fas fa-bars" />
        </div>
        <div className="logo">Connecti 9raya</div>
        <div className="nav-items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li>
        </div>
        <div className="allbtn">
          <button className="btn">Sign in </button>
          <button className="btn">Sign up</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
