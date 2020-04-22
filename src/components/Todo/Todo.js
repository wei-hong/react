import React from "react";
import "./style.css";
const Todo = (props) => {
  return (
    <li className="TodoList">
      <span
        style={{
          textDecoration: props.isCompleted ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={() => {
          props.updateTodo(props.id);
        }}
      >
        {props.task}
      </span>
      <button
        onClick={() => {
          props.removeTodo(props.id);
        }}
        className="RemoveTodoBtn"
      >
        X
      </button>
    </li>
  );
};

export default Todo;
