import React from "react";
import styles from "../../../home.module.css";
import Link from "next/link";
import SpiceHeader from "./SpiceHeader";
import SpicePictureCarousel from "./SpicePictureCarousel";
import { BsArrowRight } from "react-icons/bs";

const EventSpice = () => {
  return (
    <section className={styles.eventSpice}>
      <SpiceHeader />
      <p className={styles.eventSpice_text}>
        Want to add a touch of sophistication and flavor to your next gathering?{" "}
        <br />
        Look no further than our premium charcuterie selection, featuring a
        variety of cured meats, artisan cheeses, and perfectly paired
        accompaniments.
      </p>
      <SpicePictureCarousel />
      <h3 className="text-center mb-4 px-2">
        Customize your order or choose from one of our board types!
      </h3>
      <div className="text-center">
        <Link href="/menu" className={styles.eventSpice_cta}>
          Check out our Menu{" "}
          <BsArrowRight className={styles.eventSpice_cta__icon} />
        </Link>
      </div>
    </section>
  );
};

export default EventSpice;
