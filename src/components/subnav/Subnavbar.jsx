import React from "react";
import "./Subnavbar.css";

const Subnavbar = () => {
  return (
    <div className="subNav">
      <div>
        <p>
          <i class="fa-solid fa-bars"></i>
        </p>
        <p>
          <h4>Browse By Category</h4>
        </p>
        <p>Home</p>
        <p>Easy Monthly Installments</p>
        <p>Shop by Brands</p>
        <p>Become a Vendor</p>
      </div>
      <div>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-linkedin-in"></i>
        <i class="fa-brands fa-twitter"></i>
      </div>
    </div>
  );
};

export default Subnavbar;
