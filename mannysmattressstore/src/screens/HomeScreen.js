import React from "react";
import CarouselBody from "../components/CarouselBody";
import { Container } from "react-bootstrap";
import items from "../data";

const HomeScreen = () => {
  return (
    <Container className="text-center p-3 justify-content-center">
      <h1>
        Get the sleep you deserve here at
        <h1 className="text-warning">Bella Sleep</h1>
      </h1>
      <CarouselBody items={items} />
      <h5 className="py-3">
        We have Serta and Beautyrest matresses at the best prices! Come stop by
        and see our inventory in Lake Zurich, IL
      </h5>
    </Container>
  );
};

export default HomeScreen;
