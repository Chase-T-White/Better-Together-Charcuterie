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
import Col from "react-bootstrap/Col";
import Image from "next/image";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [boardSelection, setBoardSelection] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalInfo, setModalInfo] = useState(null);

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
        <section>
          <Container>
            <h3>Specialty Boards</h3>
            <Row>
              <Col></Col>
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
