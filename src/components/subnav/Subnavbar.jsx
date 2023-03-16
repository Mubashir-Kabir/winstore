import React, { useEffect, useState } from "react";
import "./Subnavbar.css";

const Subnavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary ">
      <div class="container-fluid subNav text-white ">
        <div class="dropdown">
          <button
            class="btn btn-outline-light dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="d-none d-md-inline-block">Browse By</span> Category
          </button>
          <ul class="dropdown-menu">
            {categories.map((category) => (
              <li>
                <a class="dropdown-item" href="#">
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="d-block d-md-none">
          <i className="fa-brands fa-facebook-f me-2"></i>
          <i className="fa-brands fa-instagram me-2"></i>
          <i className="fa-brands fa-linkedin-in me-2"></i>
          <i className="fa-brands fa-twitter me-2"></i>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa-solid fa-bars text-white"></i>{" "}
        </button>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ">
            <a class="nav-link active text-white" aria-current="page" href="#">
              Home
            </a>
            <a class="nav-link text-white" href="#">
              Easy Monthly Installments
            </a>
            <a class="nav-link text-white" href="#">
              Shop by Brands
            </a>
            <a class="nav-link text-white">Become a Vendor</a>
          </div>
          <div className="d-none d-md-block">
            <i className="fa-brands fa-facebook-f ms-4 "></i>
            <i className="fa-brands fa-instagram ms-4"></i>
            <i className="fa-brands fa-linkedin-in ms-4"></i>
            <i className="fa-brands fa-twitter ms-4"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Subnavbar;
