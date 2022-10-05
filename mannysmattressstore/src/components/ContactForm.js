import React from "react";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";

const ContactForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

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
      )
      .then(handleShow());
  };

  return (
    <Container className="text-center m-auto py-2">
      <Row>
        <Col lg={6}>
          <h5 class="text-center">
            Please fill out the following form if you would like more
            information on our mattress selection
          </h5>
          <Form ref={form} onSubmit={sendEmail}>
            <label for="name">Name</label>
            <input
              type="text"
              required
              name="name"
              className="form-control"
              id="name"
              placeholder="enter your name"
              value={values.name}
              onChange={set("name")}
            />
            <label for="email">Email address</label>
            <input
              required
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="enter your email"
              value={values.email}
              onChange={set("email")}
            />
            <label for="phone">Phone Number</label>
            <input
              type="phone-number"
              name="phone"
              className="form-control"
              id="phone"
              placeholder="enter your phone"
              required="true"
              value={values.phone}
              onChange={set("phone")}
            />
            <label for="email_body">Message</label>
            <textarea
              className="form-control py-2"
              name="message"
              id="message"
              rows="5"
              required="true"
              value={values.message}
              onChange={set("message")}
            ></textarea>
            <Button type="submit" className="btn btn-warning py-2">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Your Message has Been Sent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Our Customer Care Specialist will contact you for more information as
          soon as possible. Thank you and have a wonderful day! Close this
          message to return to the home page.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ContactForm;
