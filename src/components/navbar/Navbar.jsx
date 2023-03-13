import React from "react";
import "./Navbar.css";
import logo from "../../resources/logo.png";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="navLeftSide">
        <div className="companyLogo">
          <img src={logo} alt="" />
        </div>
        <div className="searchBox">
          <p className="searchCategory">All Category</p>
          <input className="search" type="text" placeholder="Search" />
          <i class="fa-solid fa-magnifying-glass searchIcon"></i>
        </div>
      </div>
      <div>
        <div className="navContact">
          <div>
            <p>call us now</p>
            <div>
              <i class="fa-solid fa-headphones"></i>
              <p>+011 5827918</p>
            </div>
            <p>sign in</p>
          </div>
          <div className="navbarRightIcons">
            <i class="fa-regular fa-user"></i>
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-cart-shopping cartItemCountParent">
              <span className="cartWithIcon">cart</span>
              <span className="cartItemCount">3</span>
            </i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
