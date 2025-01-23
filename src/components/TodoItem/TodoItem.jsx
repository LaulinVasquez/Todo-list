import styles from "./TodoItem.module.css";
import Checkbox from "../Checkbox/Checkbox";
import Typography from "../Typography/Typography";
import ActionButtons from "../ActionButtons/ActionButtons";
import Pen from "../../assets/icons8-pen.png";
import Trash from "../../assets/icons8-trash.png";

function TodoItem() {
  return (
    <>
      <div className={styles.taskName}>
        <Checkbox />
        <Typography fontSize={15}>clean the bathroom</Typography>
      </div>
      <div className={styles.actionButtons}>
        <ActionButtons icon={Pen} handleClick={() => null} />
        <ActionButtons icon={Trash} handleClick={() => null} />
      </div>
    </>
  );
}

export default TodoItem;

