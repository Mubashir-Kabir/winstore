import React, { useEffect, useState } from "react";
import BestDealsCard from "../bestDealsCard/BestDealsCard";

const BestDeals = () => {
  const afterGettingCategory = (data) => {
    setCategories(data);
    setCategory(data[0]);
  };

  const [categoryBaseProducts, setCategoryBaseProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => afterGettingCategory(data));
  }, []);
  const [category, setCategory] = useState(categories[0]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setCategoryBaseProducts(data));
  }, [category, categories]);
  console.log(categoryBaseProducts);
  return (
    <div>
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex display-6">
          <p className="text-info">Best </p>
          <p>Deals</p>
        </div>
        <div className="d-flex">
          {categories.map((cat) => (
            <p key={cat} onClick={() => setCategory(cat)} className="me-3">
              {cat}
            </p>
          ))}
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 container mx-auto g-4 ">
        {categoryBaseProducts.map((product) => (
          <BestDealsCard product={product} key={product.id}></BestDealsCard>
        ))}
      </div>
    </div>
  );
};

export default BestDeals;
