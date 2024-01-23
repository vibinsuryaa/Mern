import React from "react";
import { Carousel } from "react-bootstrap";

export default function Carousal() {
  return (
    <div>
      <Carousel interval={2000}>
        <Carousel.Item>
          {/* About Us slide */}
          <img
            className="d-block w-100 h-auto"
            src="https://source.unsplash.com/random/900x500/?food"
            style={{ filter: "brightness(30%)" }}
            alt="About Us slide"
          />
          <Carousel.Caption style={{ zIndex: "10", top: "10%" }}>
            <div>
              <img
                src="https://source.unsplash.com/random/900x500/?food"
                alt="Company Logo"
                style={{ borderRadius: "50%", marginBottom: "20px" }}
              />
              <h1>Welcome to "GoFood" Online Ordering</h1>
              <p>
              Savor Exceptional Flavors, Anywhere, Anytime

              At "GoFood", we're thrilled to bring our exquisite flavors to your doorstep.
               With our easy-to-use online ordering platform, experience the convenience of enjoying
              our culinary delights from the comfort of your home.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* Second slide */}
          <img
            className="d-block w-100 h-auto"
            src="https://source.unsplash.com/random/900x500/?pastry"
            style={{ filter: "brightness(30%)" }}
            alt="Second slide"
          />
          <Carousel.Caption style={{ zIndex: "10", top: "10%" }}>
          <div>
              <img
                src="https://source.unsplash.com/random/900x500/?dessert"
                alt="Company Logo"
                style={{ borderRadius: "10%", marginBottom: "100px" }}
              />
            <h1>Explore Our Menu</h1>
            <p>     

Indulge in a symphony of tastes crafted by our passionate chefs.
 Browse through our diverse menu featuring locally-sourced ingredients and 
 curated dishes that promise to elevate your dining experience.
            </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* Third slide */}
          <img
            className="d-block w-100 h-auto"
            src="https://source.unsplash.com/random/900x500/?barbecue"
            style={{ filter: "brightness(30%)" }}
            alt="Third slide"
          />
          <Carousel.Caption style={{ zIndex: "10", top: "10%" }}>
          <div>
              <img
                src="https://source.unsplash.com/random/900x500/?nonveg"
                alt="Company Logo"
                style={{ borderRadius: "50%", marginBottom: "20px" }}
              />
            <h1>Fresh, Fast, and Flavorsome</h1>
            <p>
            From kitchen to your table, we prioritize freshness and promptness. 
            Every order is prepared with care, ensuring that the flavors you love are delivered to you at their finest.
            </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* Search bar slide */}
          <img
            className="d-block w-100 h-auto"
            src="https://source.unsplash.com/random/900x500/?hotel"
            style={{ filter: "brightness(30%)" }}
            alt="Search slide"
          />
          <Carousel.Caption style={{ zIndex: "10", top: "10%" }}>
            {/* Search bar */}
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success text-white bg-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
