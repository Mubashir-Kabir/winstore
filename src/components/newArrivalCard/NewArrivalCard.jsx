import React from "react";
import "./NewArrivalCard.css";

const NewArrivalCard = ({ product }) => {
  const { title, image, price, category } = product;

  return (
    <div className="col">
      <div className="card h-100 px-2 position-relative">
        <p className="mb-0">{category} item</p>
        <p className="card-title">
          {title.length > 17 ? <>{title.slice(0, 17)}...</> : title}
        </p>
        <img
          src={image}
          className="card-img-top w-50 mx-auto mb-5 pb-5 "
          alt="..."
        />
        <div className="card-body newArrivalCardBody">
          <p className="card-text d-flex justify-content-around">
            <span className="text-decoration-line-through">
              ${(price + 5).toFixed(2)}
            </span>
            <span className="text-info">{price.toFixed(2)}</span>
          </p>
          <button className="btn btn-info w-100 ">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalCard;
