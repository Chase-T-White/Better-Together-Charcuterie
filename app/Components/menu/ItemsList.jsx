import Item from "./Item";
import styles from "../../menu.module.css";

const ItemsList = ({ menuItems, setModalShow }) => {
  return (
    <article className={styles.menu__itemsList}>
      {menuItems.map((item) => {
        return <Item key={item.id} item={item} setModalShow={setModalShow} />;
      })}
    </article>
  );
};

export default ItemsList;
