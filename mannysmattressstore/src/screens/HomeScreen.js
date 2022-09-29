import React from "react";
import CarouselBody from "../components/CarouselBody";
import items from "../data";

const HomeScreen = () => {
  return (
    <div className="text-center">
      <h1>Best sellers</h1>
      <div>
        <CarouselBody items={items} />
      </div>
    </div>
  );
};

export default HomeScreen;
