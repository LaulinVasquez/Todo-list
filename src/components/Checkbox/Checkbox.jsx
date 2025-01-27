import { useDispatch } from "react-redux";
import check from "../../assets/icons8-check.png";
import styles from "./Checkbox.module.css";
import { updateTodo } from "../../reducer/todoSlice";

function Checkbox({ todo }) {
  const dispatch = useDispatch();
  const handleCheckbox = (checked) => {
    dispatch(updateTodo({...todo, done: checked}));
    console.log(todo);
  }
  return (
    <div className={todo.done ? styles.checkbox : styles.active}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => handleCheckbox(e.target.checked)}
      />
      <img src={check} alt="check" className={styles.icon} />
    </div>
  );
}
export default Checkbox;
