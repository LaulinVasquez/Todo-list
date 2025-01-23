import styles from "./Card.module.css";

function Card({ children, col }) {
  return (
    <div
      className={col ? styles.cardCol : styles.card}
      style={{ flexDirection: col ? "column" : "row" }}
    >
      {children}
    </div>
  );
}

export default Card;
