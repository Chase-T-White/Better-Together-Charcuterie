"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="align-items-center">
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
              <AiFillFacebook />
            </Link>
            <Link
              href="https://www.instagram.com/BetterTogetherCharcuterie/"
              className="me-3"
              target={"_blank"}
            >
              <AiFillInstagram />
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
