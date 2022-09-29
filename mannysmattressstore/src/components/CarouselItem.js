import React from "react";
import { Carousel } from "react-bootstrap";
import NateSave from "../img/NateBerkus/NateSave.jpg";

const CarouselItem = ({ items }) => {
  console.log(items.name, "Item");
  return (
    <Carousel.Item>
      <img className="d-block w-100" src={items.mainImage} alt="First slide" />
      <Carousel.Caption>
        <h3>{`${items.name}`}</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
};

export default CarouselItem;
