import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import img from "../img";

const Gallery = () => {
  return (
    <Container className="py-2 d-flex justify-content-center">
      <Row className="">
        {img.map((img) => (
          <Col className=" py-2" lg={4}>
            <Card key={img._id}>
              <Card.Img variant="top" src={img.img} />
              <Card.Body>
                <Card.Title>{img.description}</Card.Title>
                <Card.Text className="text-warning">{img.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
