import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselBody = ({ items }) => {
  return (
    <div className="text-center">
      <Carousel fade className="carouselImage">
        {items.map((items) => (
          <Carousel.Item key={items._id}>
            <img className="d-block w-100" src={items.image} alt={items.alt} />
            <Carousel.Caption>
              {/* <h3>{`${items.name}`}</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselBody;
