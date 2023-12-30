import { useState } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onhandleDelete }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onhandleDelete={onhandleDelete}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
// handleDelete={() => {
//   handleDelete(item.name);
// }}
