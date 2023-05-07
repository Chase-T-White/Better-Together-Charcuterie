"use client";

import Header from "../Components/Header";
import bgImage from "../../public/images/menu/menuHeader1.jpg";
import { useState, useEffect } from "react";
import WelcomeScreen from "../Components/WelcomeScreen";
import MenuModal from "../Components/menu/MenuModal";
import ItemsList from "../Components/menu/ItemsList";
import styles from "../menu.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import sweetsImg from "/public/images/menu/specialtySweets.jpg";
import fruitsImg from "/public/images/menu/specialtyFruits.png";
import meatsImg from "/public/images/menu/specialtyMeats.jpg";
import vegImg from "/public/images/menu/specialtyVegan.jpg";
import seafoodImg from "/public/images/menu/specialtySeafood.jpg";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [boardSelection, setBoardSelection] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  // const [modalInfo, setModalInfo] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      const res = await fetch("/api/menu");
      const data = await res.json();
      setMenuItems(data);
      setLoading(false);
    };

    fetchMenu();
  }, []);

  if (loading) {
    return <WelcomeScreen />;
  }

  return (
    <main>
      <MenuModal
        modalInfo={modalInfo}
        modalShow={modalShow}
        setModalShow={setModalShow}
      />
      <div className="wrapper">
        <Header background={bgImage} title={"Menu"} />
        <section className="mb-5">
          <Container>
            <h3 className="mb-4">Specialty Boards</h3>
            <Row className={styles.cards_container}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={sweetsImg} />
                <Card.Body>
                  <Card.Title>Sweets</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Add To Order</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={fruitsImg} />
                <Card.Body>
                  <Card.Title>Fruits</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Add To Order</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={meatsImg} />
                <Card.Body>
                  <Card.Title>Meats</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Add To Order</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={vegImg} />
                <Card.Body>
                  <Card.Title>Vegan</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Add To Order</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={seafoodImg} />
                <Card.Body>
                  <Card.Title>Seafood</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Add To Order</Button>
                </Card.Body>
              </Card>
            </Row>
          </Container>
        </section>
        <section className={styles.menu__itemsList_container}>
          <ItemsList menuItems={menuItems} setModalShow={setModalShow} />
        </section>
      </div>
    </main>
  );
};

export default Menu;
