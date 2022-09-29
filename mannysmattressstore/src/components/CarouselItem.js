import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselItem = ({ items }) => {
  console.log(items.image);
  return (
    <Carousel.Item>
      <img className="d-block w-100" src={items.image} alt="First slide" />
      <Carousel.Caption>
        <h3>{`${items.name}`}</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
};

export default CarouselItem;
