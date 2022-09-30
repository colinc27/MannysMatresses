import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import SocialFollow from "./SocialFollow"
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Row, Col, Container } from "react-bootstrap";

function Social() {
  return (
    <>
      <Container className="justify-content-center socailCont">
        <Row className="social-container text-center" lg={6}>
          <Col>
            <a
              href="https://www.linkedin.com/in/colin-christoph-4a3180ba/"
              className="twitter social"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </Col>
          <Col>
            <a href="https://github.com/colinc27" className="github social">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </Col>
          <Col>
            <a
              href="https://www.facebook.com/colin.christoph/"
              className="facebook social"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Social;
