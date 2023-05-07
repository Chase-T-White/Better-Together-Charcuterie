"use client";

import { useState, useEffect } from "react";
import styles from "../../home.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import owner from "/public/images/about/owner.jpg";
import owner2 from "/public/images/about/ownerNFriend.jpg";
import { useInView } from "react-intersection-observer";

const Founders = () => {
  const [moveY, setMoveY] = useState(50);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const changeY = () => {
    if (moveY !== 0) {
      return setMoveY(moveY - 2);
    }
    return;
  };

  return (
    <section className={styles.founders} onScroll={inView ? changeY() : null}>
      <h1 className={styles.founders_heading}>Hey, I'm Haley!</h1>
      <Container fluid="lg">
        <Row className={styles.founders_text__container}>
          <Col className={styles.founders_text}>
            <p className={styles.founders_text__box}>
              I'm passionate about bringing people together through the power of
              food. I believe that charcuterie boards are more than just a
              delicious snack; they're an art form that can bring joy and
              connection to any occasion.
            </p>
          </Col>
          <Col className={styles.founders_text}>
            <p className={styles.founders_text__box}>
              I created this company to share my love of charcuterie with others
              and to help people create beautiful and memorable experiences
              around food. Whether you're taking one of our classes or ordering
              a custom board, I hope that you'll find joy and inspiration in the
              art of charcuterie just as I have.
            </p>
          </Col>
        </Row>
      </Container>
      <div ref={ref} className="position-relative founder_image-container">
        <Image
          src={owner}
          alt="Picture of owner Haley White"
          width={300}
          height={450}
          className={styles.founder_image}
          style={{ transform: `translateY(${moveY}%) rotate(-10deg)` }}
        />
        <Image
          src={owner2}
          alt="Picture of owner Haley White with friend"
          width={300}
          height={200}
          className={styles.founder_image}
          style={{ transform: `translateY(${moveY}%) rotate(5deg)` }}
        />
      </div>
    </section>
  );
};

export default Founders;
