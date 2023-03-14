import React from "react";
import A from "../../resources/image-116.png";

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" class="carousel carousel-dark slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
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
      <div class="carousel-inner">
        <div class="carousel-item active position-relative">
          <img src={A} class="d-block w-100" alt="..." />
          <div class="position-absolute d-none d-md-block top-0 start-0 w-25 mt-4 ms-4">
            <h5>Shop Computer & experience</h5>
            <p>
              You cannot inspect quality into the product; it is already there.
              I am not a product of my circumstances. I am a product of my
              decisions.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={A} class="d-block w-100" alt="..." />
          <div class="position-absolute d-none d-md-block top-0 start-0 w-25 mt-4 ms-4">
            <h5>Shop Computer & experience</h5>
            <p>
              You cannot inspect quality into the product; it is already there.
              I am not a product of my circumstances. I am a product of my
              decisions.
            </p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={A} class="d-block w-100" alt="..." />
          <div class="position-absolute d-none d-md-block top-0 start-0 w-25 mt-4 ms-4">
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
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
