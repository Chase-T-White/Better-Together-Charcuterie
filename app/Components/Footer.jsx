"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <Container fluid="md">
        <Row>
          <Col>
            Better Together Charcuterie &copy; {new Date().getFullYear()} All
            Rights Reserved
          </Col>
          <Col className="text-end">
            <Link
              href="https://www.facebook.com/BetterTogetherCharcuterie/"
              className="me-3"
              target={"_blank"}
            >
              <AiFillFacebook className="footer-icon" />
            </Link>
            <Link
              href="https://www.instagram.com/BetterTogetherCharcuterie/"
              className="me-3"
              target={"_blank"}
            >
              <AiFillInstagram className="footer-icon" />
            </Link>
            <Link
              href="https://www.linkedin.com/BetterTogetherCharcuterie406"
              target={"_blank"}
            >
              <AiFillLinkedin className="footer-icon" />
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
