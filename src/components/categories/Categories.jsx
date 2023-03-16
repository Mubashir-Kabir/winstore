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
    <div>
      <div className="row my-4 container mx-auto row-cols-1 row-cols-md-3 row-cols-lg-5 justify-content-around">
        {categories.map((category) => (
          <CategoryCard category={category} key={category}></CategoryCard>
        ))}
      </div>
      <hr className="container mb-4" />
    </div>
  );
};

export default Categories;
