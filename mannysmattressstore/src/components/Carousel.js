import React from "react";
import { Carousel } from "react-bootstrap";
import CarouselItem from "./CarouselItem";

const CarouselImg = ({ items }) => {
  console.log(items, "Carousel");
  return (
    <div className="text-center">
      <h1>Best sellers</h1>

      <Carousel fade>
        {items.map((items) => (
          <CarouselItem key={items.id} items={items} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselImg;
