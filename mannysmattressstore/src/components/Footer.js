import React from "react";
import { Container, Col, Row, ListGroup } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <Container className="">
        <Row>
          <Col className="text-center py-3 " md={12} lg={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11823.275366758236!2d-88.12977696044928!3d42.19694080000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fa15befb0970f%3A0x439608043b2fff0e!2sBella%20Sleep%2C%20Inc.!5e0!3m2!1sen!2sus!4v1664378481473!5m2!1sen!2sus"
              allowFullScreen=""
              height="400px"
              width="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col className="py-3 text-white" sm={12} lg={6}>
            <Row>
              <div className="text-center">
                <strong>Hours of Operation</strong>
              </div>

              <Col>
                <ul className="footList">
                  <li className="py-1">Sunday</li>
                  <li className="py-1">Monday</li>
                  <li className="py-1">Tuesday</li>
                  <li className="py-1">Wednesday</li>
                  <li className="py-1">Thursday</li>
                  <li className="py-1">Friday</li>
                  <li className="py-1">Saturday</li>
                </ul>
              </Col>
              <Col className="text-end">
                <ul className="footList">
                  <li className="py-1">11:00 AM-6:00 PM</li>
                  <li className="py-1">10:30 AM-7:30 PM</li>
                  <li className="py-1">10:30 AM-7:30 PM</li>
                  <li className="py-1">10:30 AM-7:30 PM</li>
                  <li className="py-1">10:30 AM-7:30 PM</li>
                  <li className="py-1">10:30 AM-7:30 PM</li>
                  <li className="py-1">10:30 AM-7:30 PM</li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col>
                <ul className="footList">
                  <li>
                    <strong>Phone Number: (847)-320-1697</strong>
                  </li>
                </ul>
              </Col>
              <Col>
                <ul className="footList text-end">
                  <li>
                    <strong>Email: bellasleep@myyahoo.com</strong>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
          {/* <Col className="py-3">
            <ListGroup variant="flush bg-primary">
              <ListGroup.Item>Phone Number: (847)-320-1697</ListGroup.Item>
              <ListGroup.Item>Email: bellasleep@myyahoo.com</ListGroup.Item>
            </ListGroup>
          </Col> */}
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
