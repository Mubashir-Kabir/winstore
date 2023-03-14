import React, { useEffect, useState } from "react";
import CategoryCard from "../categoryCard/CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 justify-content-evenly">
      {categories.map((category) => (
        <CategoryCard category={category}></CategoryCard>
      ))}
    </div>
  );
};

export default Categories;
