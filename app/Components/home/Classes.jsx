"use client";

import React from "react";
import styles from "../../home.module.css";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import class1 from "/public/images/home/classes/classes1.jpg";
import class2 from "/public/images/home/classes/classes2.jpg";
import class3 from "/public/images/home/classes/classes4.jpg";

const Classes = () => {
  return (
    <section className={styles.classes}>
      <Container fluid="md">
        <h3 className="text-center">
          Check out one of our Charcuterie Classes!
        </h3>
        <Row className={styles.classes_text_container}>
          <Col
            className={`${styles.classes_text} align-self-start content-backdrops`}
          >
            <p>
              Our classes are fun, interactive, and a great way to meet new
              people who share your passion for food.
            </p>
          </Col>
          <Col
            className={`${styles.classes_text} align-self-center content-backdrops`}
          >
            <p>
              A charcuterie class is a unique and thoughtful gift idea that is
              perfect for anyone who loves food, entertaining, and trying new
              things.
            </p>
          </Col>
          <Col
            className={`${styles.classes_text} align-self-end content-backdrops`}
          >
            <p>
              Our expert instructors provide personalized instruction and
              guidance, ensuring that you leave the class feeling confident and
              excited to create your own charcuterie boards at home.
            </p>
          </Col>
        </Row>
        <Image
          src={class3}
          alt="picture"
          width={800}
          height={600}
          className={styles.classes_img__main}
        />
      </Container>
      <Image
        src={class1}
        alt="picture"
        width={400}
        height={350}
        className={`${styles.classes_img} ${styles.classes_img1}`}
      />
      <Image
        src={class2}
        alt="picture"
        width={400}
        height={300}
        className={`${styles.classes_img} ${styles.classes_img2}`}
      />
    </section>
  );
};

export default Classes;
