import React from "react";
import "./Subnavbar.css";

const Subnavbar = () => {
  return (
    <div className="subNav">
      <div>
        <p>
          <i className="fa-solid fa-bars"></i>
        </p>

        <h4>Browse By Category</h4>

        <p>Home</p>
        <p>Easy Monthly Installments</p>
        <p>Shop by Brands</p>
        <p>Become a Vendor</p>
      </div>
      <div>
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-linkedin-in"></i>
        <i className="fa-brands fa-twitter"></i>
      </div>
    </div>
  );
};

export default Subnavbar;
