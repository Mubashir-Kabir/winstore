import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../resources/logo.png";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <nav className="nav">
      <div className="d-flex flex-column flex-md-row align-items-center">
        <div className="companyLogo w-50 w-lg-100">
          <img src={logo} alt="" />
        </div>
        <div className="searchBox bg-white d-flex align-items-center">
          <div className="dropdown">
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="text-muted">All Categories</span>
            </button>
            <ul className="dropdown-menu">
              {categories.map((category) => (
                <li>
                  <a className="dropdown-item" href="#">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <input className="search" type="text" placeholder="Search" />
          <i className="fa-solid fa-magnifying-glass searchIcon"></i>
        </div>
      </div>
      <div>
        <div className="navContact  d-flex align-items-center justify-content-between">
          <div className="d-flex flex-column me-2">
            <p>call us now</p>
            <div>
              <i className="fa-solid fa-headphones"></i>
              <p>+011 5827918</p>
            </div>
            <p>sign in</p>
          </div>
          <div className="navbarRightIcons mx-auto ms-5">
            <i className="fa-regular fa-user me-3 "></i>
            <i className="fa-regular fa-heart me-3 "></i>
            <i className="fa-solid fa-cart-shopping cartItemCountParent me-3 ">
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
