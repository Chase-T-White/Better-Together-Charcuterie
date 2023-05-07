"use client";

import { useState, useEffect } from "react";
import styles from "../../../home.module.css";

const SpiceHeader = () => {
  const [index, setIndex] = useState(0);

  const events = [
    "Weddings",
    "Holidays",
    "Graduations",
    "Birthdays",
    "Get Togethers",
    "Date Nights",
    "Business Events",
  ];

  useEffect(() => {
    const lastIndex = events.length - 1;
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);

    return () => clearInterval(slider);
  }, [index]);

  return (
    <header className={styles.eventSpice_header}>
      <h2 className={styles.eventSpice_header__heading}>
        Spice up your
        {events.map((event, i) => {
          let sliderPosition = styles.next;
          if (i === index) {
            sliderPosition = styles.current;
          }
          if (i === index - 1 || (index === 0 && i === events.length - 1)) {
            sliderPosition = styles.previous;
          }
          return (
            <div
              key={i}
              className={`${sliderPosition} ${styles.eventSpice_header__heading_span}`}
            >
              {event}
            </div>
          );
        })}
      </h2>
    </header>
  );
};

export default SpiceHeader;
