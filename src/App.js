import React from "react";
import "./App.css";

const Square = (props) => {
  return <button onClick={() => alert("clicked")}>{props.value}</button>;
};

const Board = () => {
  const renderSquare = (num) => {
    return <Square value={num} />;
  };

  return (
    <div>
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
    </div>
  );
};

export default Board;
