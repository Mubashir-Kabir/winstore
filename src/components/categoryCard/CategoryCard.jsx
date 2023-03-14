import React from "react";
import placeholder from "../../resources/category-placeholder.jpg";
import "./CategoryCard.css";

const CategoryCard = ({ category }) => {
  return (
    <div className="col position-relative">
      <img className="position-relative w-100" src={placeholder} alt="" />
      <p className="position-absolute categoryCardText shadow-lg bg-white">
        {category}
        <a className="ms-4 text-decoration-none" href="#">
          Shop
        </a>
      </p>
    </div>
  );
};

export default CategoryCard;
