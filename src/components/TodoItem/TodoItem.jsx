import styles from "./TodoItem.module.css";
import Checkbox from "../Checkbox/Checkbox";
import Typography from "../Typography/Typography";
import ActionButtons from "../ActionButtons/ActionButtons";
import Pen from "../../assets/icons8-pen.png";
import Trash from "../../assets/icons8-trash.png";
import check from "../../assets/icons8-check.png";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../reducer/todoSlice";
import { useState } from "react";

function TodoItem({ todo }) {
  const [editingMode, setEditingMode] = useState(false);
  const [newTodo, setNewTodo] = useState(todo);
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(updateTodo(newTodo));
    setEditingMode(false);
  };
  return (
    <>
      <div className={styles.taskName}>
        <Checkbox todo={todo} />
        {editingMode ? (
          <input type="text" onChange={(e)=> setNewTodo({...todo, name: e.target.value})}/>
        ) : (
          <Typography fontSize={15}>{todo.name}</Typography>
        )}
      </div>
      <div className={styles.actionButtons}>
        {editingMode ? (
          <ActionButtons
            icon={check}
            handleClick={() => handleEdit()}
          />
        ) : (
          <ActionButtons icon={Pen} handleClick={() => setEditingMode(true)} />
        )}
        <ActionButtons
          icon={Trash}
          handleClick={() => dispatch(deleteTodo(todo.id))}
        />
      </div>
    </>
  );
}

export default TodoItem;
