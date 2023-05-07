"use client";

import styles from "../../home.module.css";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import { useInView } from "react-intersection-observer";
import t1 from "/public/images/home/Transitionals/t1.jpg";
import t2 from "/public/images/home/Transitionals/t2.jpg";
import t3 from "/public/images/home/Transitionals/t3.jpg";

const TransitionQuote = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const quote = "Passionate about bringing people together through food";
  const stringArray = quote.split(" ");
  let delay = 0;

  return (
    <section className={styles.transition_section}>
      <Container fluid="xl" className="position-relative">
        <h1 ref={ref} className={styles.transition_quote}>
          {stringArray.map((letter, i) => {
            delay += 0.2;
            return (
              <span
                key={i}
                className={`${styles.transition_quote__word} ${
                  inView ? styles.letter_show : ""
                }`}
                style={{ transitionDelay: delay + "s" }}
              >
                {letter}
              </span>
            );
          })}
        </h1>
        <Image
          className={`${styles.transition_img} ${styles.transition_img1} ${
            inView ? "reveal" : ""
          }`}
          src={t1}
          alt="picture"
          width={150}
          height={150}
        />
        <Image
          className={`${styles.transition_img} ${styles.transition_img2} ${
            inView ? "reveal" : ""
          }`}
          src={t2}
          alt="picture"
          width={150}
          height={150}
        />
        <Image
          className={`${styles.transition_img} ${styles.transition_img3} ${
            inView ? "reveal" : ""
          }`}
          src={t3}
          alt="picture"
          width={150}
          height={150}
        />
      </Container>
    </section>
  );
};

export default TransitionQuote;
