import React from "react";
import "./style.css";
const AddTodo = (props) => {
  return (
    <div>
      <form onSubmit={props.addTodo}>
        <input
          className="TodoInput"
          type="text"
          value={props.task}
          onChange={props.onChangeHandler}
        />
      </form>
    </div>
  );
};

export default AddTodo;
