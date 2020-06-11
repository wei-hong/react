import React, { useState } from "react";

const Turn = (props) => {
  const [Flag1, setFlag] = useState(true);

  return (
    <div>
      <button
        className="button1"
        onClick={() => {
          props.handleTurn(props.flag);
        }}
      >
        {props.flag ? "on" : "off"}
      </button>
      <button
        className="hook-button"
        onClick={() => {
          setFlag(!Flag1);
        }}
      >
        {Flag1 ? "on" : "off"}
      </button>
    </div>
  );
};

export default Turn;
