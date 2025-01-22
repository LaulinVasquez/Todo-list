import Typography from "../Typography/Typography";
import styles from "./Card.module.css";
import Checkbox from "../Checkbox/Checkbox";
import pen from "../../assets/icons8-pen.png";

function Card() {
  return (
    <div className={styles.card}>
        <div className={styles.taskName}>
        <Checkbox />
        <Typography fontSize={20}>clean the bathroom</Typography>
      </div>
      <div className={styles.actionButtons}>
        <button><img src={pen} alt="pen"/></button>
        <button>+</button>
      </div>
    </div>
  );
}

export default Card;
