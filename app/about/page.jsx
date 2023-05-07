"use client";

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import ownerMain from "/public/images/about/ownerOnChair.jpg";
import owner2 from "/public/images/about/ownerNGrapes.jpg";

const About = () => {
  return (
    <main>
      <Container>
        <Row>
          <Col>
            <Image src={ownerMain} alt="Haley White" width={750} height={500} />
          </Col>
          <Col>
            <p>
              "Hi, I'm Haley! Born and raised in Billings, Montana, I've always
              had a passion for improving people's lives. After earning my
              master's degree in healthcare administration, I worked in the
              healthcare industry for several years, focusing on improving
              patient care in any way I could. <br />
              <br /> One of my most notable achievements during that time was
              developing a new design for bedpans that improved patient comfort
              and safety. This work inspired me to think creatively about how
              small changes in the healthcare industry can have a big impact on
              people's lives, and even inspired me to incorporate bedpans into
              my charcuterie creations.
              <br />
              <br /> While working in healthcare, I discovered my love for
              charcuterie and the art of creating beautiful and delicious
              boards. I've been in the charcuterie business for over 5 years now
              and have had the privilege of creating custom boards for a wide
              range of events and occasions, including ones where I incorporate
              bedpans in creative ways.
              <br />
              <br /> My passion for charcuterie has been recognized through
              several awards and recognitions, including being named the
              "Charcuterie Artist of the Year" by Food & Wine Magazine and being
              featured in Martha Stewart Living for my innovative approach to
              creating beautiful and sustainable boards. <br />
              <br />
              I'm excited to share my passion and expertise with you through our
              classes and custom boards. Whether you're looking to impress your
              guests at your next event or simply enjoy a delicious and
              beautiful snack (with or without bedpans!), I'm here to help you
              create an unforgettable experience."
            </p>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default About;
