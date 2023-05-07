"use client";

import { useState, useEffect } from "react";
import styles from "../../home.module.css";
import WelcomeScreen from "../WelcomeScreen";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Features = () => {
  const [featureItems, setFeatureItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeature = async () => {
      const res = await fetch("/api/home");
      const data = await res.json();
      setFeatureItems(data);
      setLoading(false);
    };

    fetchFeature();
  }, []);

  if (loading) {
    return <WelcomeScreen />;
  }

  return (
    <section className={styles.features}>
      <Container className="h-100">
        <Row
          xs={1}
          sm={1}
          md={3}
          className="h-100 align-items-center justify-content-between"
        >
          {featureItems.map((feature) => {
            return (
              <Col key={feature.id} className={styles.feature}>
                <Image
                  src={feature.image}
                  alt={feature.feature}
                  width={150}
                  height={150}
                  className="mb-5"
                />
                <h3 className="mb-3">{feature.feature}</h3>
                <p>{feature.text}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
