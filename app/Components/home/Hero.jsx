"use client";

import styles from "../../home.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import heroImage from "../../../public/images/home/hero1NoBg.png";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__content}>
        <h1>Better Together Charcuterie</h1>
        <p className="text-light fs-3">
          A modern swing on Charcuterie - crafted locally in Billings, MT
        </p>
        <div>
          <Button variant="outline-primary me-3">
            <Link href="/contact" className="text-light">
              Contact
            </Link>
          </Button>
          <Button>
            <Link href="/menu" className="text-light">
              Order Now
            </Link>
          </Button>
        </div>
      </div>
      <Image src={heroImage} className={styles.hero__img} priority></Image>
    </section>
  );
};

export default Hero;
