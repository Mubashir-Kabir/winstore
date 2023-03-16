import React from "react";

const BestDealsCard = ({ product, setCart, cart }) => {
  const { title, image, description, price, rating } = product;
  return (
    <div className="col">
      <div className="card p-3 h-100 position-relative">
        <h5 className="card-title m-2 m-md-3 m-lg-4">
          {title.length > 40 ? <>{title.slice(0, 40)}...</> : title}
        </h5>

        <img src={image} className="card-img-top w-50  mx-auto" alt="..." />

        <div className="card-body">
          <p className="card-text">
            {description.length > 150 ? (
              <>{description.slice(0, 150)}...</>
            ) : (
              title
            )}
          </p>
          <div className="d-flex justify-content-between">
            <p className="text-danger">${price}</p>
            <p>
              <i className="fa-solid fa-star text-warning"></i>
              {rating.rate}
            </p>
          </div>
          <p>Already Sold: {rating.count}</p>
        </div>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-info">
            Details
          </button>
          <button
            onClick={() => setCart(cart + 1)}
            type="button"
            className="btn btn-primary"
          >
            Add to cart
          </button>
        </div>
        <h5 className="bg-danger-gradient bg-opacity-50 position-absolute badge  top-0 end-0 translate-middle p-2 bg-danger border border-light rounded-circle">
          SPECIAL OFFER
        </h5>
      </div>
    </div>
  );
};

export default BestDealsCard;
