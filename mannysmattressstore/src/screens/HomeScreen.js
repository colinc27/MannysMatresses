import React from "react";
import CarouselBody from "../components/CarouselBody";
import { Container, Col, Row } from "react-bootstrap";
import items from "../data";

const HomeScreen = () => {
  return (
    <Container className="text-center p-3 justify-content-center">
      <h1>Best sellers</h1>
      <CarouselBody items={items} />
    </Container>
  );
};

export default HomeScreen;
