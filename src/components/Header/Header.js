import React from "react";
import Logo from "./../Logo/Logo";
import "./style.css";

const Header = (props) => {
  return (
    <header className="Header">
      <Logo />
      <a
        className="clearList"
        onClick={() => {
          props.clearTodo();
        }}
        href="#"
      >
        Clear
      </a>
    </header>
  );
};

export default Header;
