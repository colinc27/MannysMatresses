import React from "react";
import { Carousel, ListGroup } from "react-bootstrap";
import CarouselItem from "./CarouselItem";

const CarouselBody = ({ items }) => {
  return (
    <Carousel fade>
      {items.map((items) => (
        <Carousel.Item key={items._id}>
          <img className="d-block w-100" src={items.image} alt="First slide" />
          <Carousel.Caption>
            <h3>{`${items.name}`}</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselBody;
