import React from "react";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Form,
  Button,
  Modal,
} from "react-bootstrap";

const ContactForm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => navigate("/");
  const handleShow = () => setShow(true);

  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tpm5yt9",
        "template_egp14hb",
        form.current,
        "8-HZHZq7d47q7Opw_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container className="text-center m-auto">
      <Row>
        <Col lg={6}>
          <h1 class="text-center">Bella Sleep Contact Form</h1>
          <Form ref={form} onSubmit={sendEmail}>
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
              <label for="phone">Phone Number</label>
              <input
                type="phone-number"
                name="phone"
                className="form-control"
                id="phone"
                placeholder="enter your phone"
              />
              <label for="email_body">Message</label>
              <textarea
                className="form-control py-2"
                name="email_body"
                id="email_body"
                rows="5"
              ></textarea>
              <Button
                type="submit"
                className="btn btn-warning py-2"
                onClick={handleShow}
              >
                Submit
              </Button>
              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Your Message has Been Sent</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Our Customer Care Specialist will contact you for more
                  information as soon as possible. Thank you and have a
                  wonderful day! Close this message to return to the home page.
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
