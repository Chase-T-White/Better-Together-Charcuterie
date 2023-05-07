"use client";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Image from "next/image";
import logo from "../../public/images/logoNoBg.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="md">
      <Container fluid="xl">
        <Navbar.Brand href="/" title="BTC Home">
          <Image src={logo} alt="BTC Logo" priority width={75} height={75} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Nav.Link href="/classes">Classes</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Nav className="d-flex flex-column">
            <Navbar.Text className="navbar-contact">
              <BsFillTelephoneFill className="navbar-contact__icon" /> (406)
              672-7255
            </Navbar.Text>
            <Navbar.Text className="navbar-contact">
              <MdMail className="navbar-contact__icon" />{" "}
              bettertogethercharcuterie@gmail.com
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
