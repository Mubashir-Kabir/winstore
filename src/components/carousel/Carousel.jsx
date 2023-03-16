import React from "react";
import A from "../../resources/image-116.png";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel carousel-dark slide"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active position-relative cImg">
          <img src={A} className="d-block w-100 cImg" alt="..." />
          <div className="position-absolute d-none d-md-block carouselBody w-25 mt-4 ms-4">
            <h5>Shop Computer & experience</h5>
            <p>
              You cannot inspect quality into the product; it is already there.
              I am not a product of my circumstances. I am a product of my
              decisions.
            </p>
          </div>
          <div class="carousel-caption d-block d-md-none">
            <h5>Shop Computer & experience</h5>
            <p>
              You cannot inspect quality into the product; it is already there.
              I am not a product of my circumstances. I am a product of my
              decisions.
            </p>
          </div>
        </div>
        <div className="carousel-item active position-relative cImg">
          <img src={A} className="d-block w-100 cImg" alt="..." />
          <div className="position-absolute d-none d-md-block carouselBody w-25 mt-4 ms-4">
            <h5>Shop Computer & experience</h5>
            <p>
              You cannot inspect quality into the product; it is already there.
              I am not a product of my circumstances. I am a product of my
              decisions.
            </p>
          </div>
          <div class="carousel-caption d-block d-md-none">
            <h5>Shop Computer & experience</h5>
            <p>
              You cannot inspect quality into the product; it is already there.
              I am not a product of my circumstances. I am a product of my
              decisions.
            </p>
          </div>
        </div>
        <div className="carousel-item active position-relative cImg">
          <img src={A} className="d-block w-100 cImg" alt="..." />
          <div className="position-absolute d-none d-md-block carouselBody w-25 mt-4 ms-4">
            <h5>Shop Computer & experience</h5>
            <p>
              You cannot inspect quality into the product; it is already there.
              I am not a product of my circumstances. I am a product of my
              decisions.
            </p>
          </div>
          <div class="carousel-caption d-block d-md-none">
            <h5>Shop Computer & experience</h5>
            <p>
              You cannot inspect quality into the product; it is already there.
              I am not a product of my circumstances. I am a product of my
              decisions.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
