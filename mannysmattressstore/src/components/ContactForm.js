import React from "react";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { Container, Row, Col, FormGroup, Form, Button } from "react-bootstrap";

const ContactForm = () => {
  return (
    <Container className="text-center m-auto">
      <Row>
        <Col lg={6}>
          <h1 class="text-center">Email - JavaScript Contact Form</h1>
          <Form>
            <FormGroup>
              <label for="name">Name</label>
              <input
                type="name"
                name="name"
                className="form-control"
                id="name"
                placeholder="enter your name"
              />
              <label for="email">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="enter your email"
              />
              <label for="subject">Subject</label>
              <input
                type="text"
                name="subject"
                className="form-control"
                id="subject"
                placeholder="enter email subject"
              />
              <label for="email_body">Message</label>
              <textarea
                className="form-control py-2"
                id="email_body"
                rows="5"
              ></textarea>
              <Button type="submit" className="btn btn-warning py-2">
                Submit
              </Button>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
