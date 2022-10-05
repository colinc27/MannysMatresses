import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import img from "../img";

const Gallery = () => {
  return (
    <Container className="">
      <Row className="">
        {img.map((img) => (
          <Col key={img._id} className="galImage">
            <img className="galImage py-4" src={img.img} alt="mattress" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
