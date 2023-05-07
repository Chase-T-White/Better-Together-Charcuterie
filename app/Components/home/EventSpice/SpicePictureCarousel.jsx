"use client";

import { useState, useRef } from "react";
import styles from "../../../home.module.css";
import Image from "next/image";
import Cursor from "../../Cursor";
import spice1 from "/public/images/home/eventSpice/spice1.jpg";
import spice2 from "/public/images/home/eventSpice/spice2.jpg";
import spice3 from "/public/images/home/eventSpice/spice3.jpg";
import spice4 from "/public/images/home/eventSpice/spice4.jpg";
import spice5 from "/public/images/home/eventSpice/spice5.jpg";
import spice6 from "/public/images/home/eventSpice/spice6.jpg";
import spice7 from "/public/images/home/eventSpice/spice7.jpg";
import spice8 from "/public/images/home/eventSpice/spice8.jpg";
import spice9 from "/public/images/home/eventSpice/spice9.jpg";

const SpicePictureCarousel = () => {
  const [isDown, setIsDown] = useState(false);
  const [grabX, setGrapX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);
  const [cursorPosition, setCursorPosition] = useState("");
  const parentRef = useRef(null);

  const carouselPictures = [
    spice1,
    spice2,
    spice3,
    spice4,
    spice5,
    spice6,
    spice7,
    spice8,
    spice9,
  ];

  const handleMouseDown = (e) => {
    e.preventDefault();
    console.log(e);
    setIsDown(true);
    setGrapX(e.pageX);
    setScrollLeft(e.target.scrollLeft);
  };

  const handleScroll = (e) => {
    e.preventDefault();

    const newCursorPosition = {
      top: e.screenY - 70,
      left: e.pageX - 70,
      transform: "",
    };
    setCursorPosition(newCursorPosition);

    if (!isDown) return;
    const x = e.pageX;
    const movement = (x - grabX) * 1.5;
    parentRef.current.scrollLeft = scrollLeft - movement;
  };

  const staticMouse = () => {
    const staticCursor = {
      top: 50 + "%",
      left: 50 + "%",
      transform: "translate(-50%, -50%)",
    };
    return setCursorPosition(staticCursor);
  };

  return (
    <ul
      ref={parentRef}
      className={styles.eventSpice_carousel}
      onMouseDown={handleMouseDown}
      onMouseUp={() => setIsDown(false)}
      onMouseLeave={() => {
        setIsDown(false);
        staticMouse();
      }}
      onMouseMove={handleScroll}
    >
      {carouselPictures.map((picture, i) => {
        return (
          <li
            key={i}
            className={`${styles.eventSpice_carousel__imgContainer} ${
              isDown ? styles.carouselDrag : ""
            }`}
          >
            <Image
              src={picture}
              alt="picture"
              fill
              className={styles.eventSpice_carousel__img}
            />
          </li>
        );
      })}
      <Cursor cursorPosition={cursorPosition} />
    </ul>
  );
};

export default SpicePictureCarousel;
