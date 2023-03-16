import React, { useEffect, useState } from "react";
import BestDealsCard from "../bestDealsCard/BestDealsCard";
import "./BestDeals.css";

const BestDeals = ({ setCart, cart }) => {
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
  return (
    <div className="mb-5">
      <nav className="navbar navbar-expand-lg my-5">
        <div className="container d-flex justify-content-between">
          <div className="d-flex display-6 ">
            <p className="text-info">Best </p>
            <p>Deals</p>
          </div>
          <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                {categories.map((cat) => (
                  <p
                    className="nav-link bestDealNav "
                    onClick={() => setCategory(cat)}
                    aria-current="page"
                  >
                    {cat}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 container mx-auto g-4 ">
        {categoryBaseProducts.map((product) => (
          <BestDealsCard
            setCart={setCart}
            cart={cart}
            product={product}
            key={product.id}
          ></BestDealsCard>
        ))}
      </div>
    </div>
  );
};

export default BestDeals;
