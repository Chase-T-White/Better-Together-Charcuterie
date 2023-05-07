"use client";
import { useState } from "react";

import Image from "next/image";
import styles from "../../menu.module.css";
import { formatPrice } from "@/app/utils/helpers";
import Button from "react-bootstrap/Button";

const Item = ({ item, setModalShow }) => {
  const [imageTop, setImageTop] = useState(15);
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(0);

  const showContent = () => {
    setImageTop(Math.random() * 45 + 10 + "%");
    setScale(1);
    setOpacity(1);
  };

  const hideContent = () => {
    setOpacity(0);
    setScale(0);
  };

  return (
    <div
      className={styles.menu__item}
      tabIndex={0}
      onFocus={showContent}
      onBlur={hideContent}
    >
      <h3 className={styles.item__name}>{item.item}</h3>
      <p>{item.serves}</p>
      <div className={styles.item__info} style={{ opacity }}>
        <p className={styles.item__info_description}>{item.description}</p>
        <strong className={styles.item__info_price}>
          {item.price !== "TBD" ? formatPrice(item.price) : item.price}
        </strong>
        <Button onClick={() => setModalShow(true)}>Order Now</Button>
      </div>
      <div
        className={styles.item__img_container}
        style={{ top: imageTop, scale }}
      >
        <div className="position-relative">
          <div className="rounded-circle overflow-hidden">
            <Image src={item.image} alt={item.item} width={500} height={500} />
          </div>
          <p className={styles.item__size}>{item.size}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
