import React from "react";
import Card from "../Card/Card";
import styles from "./TodoList.module.css";


function TodoList() {
  return (
    <div className={styles.todolist}>
        {/* map function is to duplicate the component of the Todo List */}
      {[0, 1, 2, 3].map((item) => (
        <Card />
      ))}
    </div>
  );
}

export default TodoList;
