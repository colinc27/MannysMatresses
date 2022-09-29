import React from "react";
import CarouselImg from "../components/Carousel";
import items from "../data";

const HomeScreen = () => {
  console.log(items, "homescreen");
  return (
    <div>
      <CarouselImg items={items.bella}></CarouselImg>
    </div>
  );
};

export default HomeScreen;
