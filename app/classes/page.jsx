"use client";

import { useState, useEffect } from "react";
import styles from "../class.module.css";
import WelcomeScreen from "../Components/WelcomeScreen";
import ClassesModal from "../Components/classes/ClassesModal";
import Header from "../Components/Header";
import bgImage from "../../public/images/classes/classesHeader1.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);

  useEffect(() => {
    const fetchClasses = async () => {
      const res = await fetch("/api/classes");
      const data = await res.json();
      setClasses(data);
      setLoading(false);
    };

    fetchClasses();
  }, []);

  if (loading) {
    return <WelcomeScreen />;
  }

  return (
    <main>
      <ClassesModal
        modalInfo={modalInfo}
        modalShow={modalShow}
        setModalShow={setModalShow}
      />
      <div className="wrapper">
        <Header background={bgImage} title={"Classes"} />
        <section>
          <Container>
            <Row sm={1} md={2} lg={3}>
              {classes.map((cl) => {
                return (
                  <Col className="mb-5">
                    <Card key={cl.id}>
                      <Card.Img
                        variant="top"
                        src={cl.image}
                        alt="picture"
                        style={{ height: 250 }}
                      />
                      <Card.Body className={styles.card_body}>
                        <div>
                          <Card.Title>{cl.location}</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">
                            {cl.address}
                          </Card.Subtitle>
                          <Card.Text>
                            {cl.when}
                            <span>{" " + cl.time}</span>
                          </Card.Text>
                          <Card.Text>{cl.description}</Card.Text>
                          <p className={styles.card_price}>{cl.price}</p>
                        </div>
                        {cl.available ? (
                          <Button
                            variant="primary"
                            className={styles.card_btn}
                            onClick={() => {
                              setModalInfo(cl);
                              setModalShow(true);
                            }}
                          >
                            Register
                          </Button>
                        ) : (
                          <Button
                            variant="primary"
                            className={styles.card_btn}
                            disabled
                          >
                            Full
                          </Button>
                        )}
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>
      </div>
    </main>
  );
};

export default Classes;
