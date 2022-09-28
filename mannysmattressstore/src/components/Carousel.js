import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../img/img1.jpeg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";

const CarouselImg = () => {
  return (
    <div className="text-center">
      <h1>Best sellers</h1>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="First slide" />
          <Carousel.Caption>
            <h3>Blue Couch</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselImg;
