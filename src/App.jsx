import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const newhandleAdd = (newItem, newDate) => {
    const newProduct = { name: newItem, dueDate: newDate };
    setTodoItems([...todoItems, newProduct]);
  };
  const onhandleDelete = (todoName) => {
    const newItems = todoItems.filter((item) => item.name !== todoName);
    setTodoItems(newItems);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo newhandleAdd={newhandleAdd} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems
        todoItems={todoItems}
        onhandleDelete={onhandleDelete}
      ></TodoItems>
    </center>
  );
}

export default App;
//
