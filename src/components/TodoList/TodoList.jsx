import React from "react";
import Card from "../Card/Card";
import styles from "./TodoList.module.css";
import TodoItem from "../TodoItem/TodoItem";
import Typography from "../Typography/Typography";
import { useFilterTodos } from "../hooks/useFilterTodos";
function TodoList() {
  const displayedTodos = useFilterTodos()
  return (
    <div className={styles.todolist}>
      {/* if in the list there is not any to do then display no task message */}
      {displayedTodos.length > 0 ? displayedTodos.map((todo) => (
        <Card key={todo.id}>
          <TodoItem todo={todo} />
        </Card>
      )): <Typography>No Tasks in this category </Typography> }
    </div>
  );
}

export default TodoList;
