import React from "react";

const Operators = ({ onclick, onreset, calculate, del }) => {
  const generateNumbers = () => {
    const arr = [];
    for (let i = 9; i > 0; i--) {
      arr.push(
        <button
          onClick={() => {
            onclick(i);
          }}
          key={i}
        >
          {i}
        </button>
      );
    }
    return arr;
  };

  return (
    <div className="operators">
      <div className="main">
        <div className="first">
          {generateNumbers()}
          <button
            onClick={() => {
              onclick(".");
            }}
          >
            .
          </button>
          <button
            onClick={() => {
              onclick("0");
            }}
          >
            0
          </button>
          <button
            onClick={() => {
              onclick("/");
            }}
          >
            /
          </button>
        </div>
        <div className="second">
          <button onClick={del}>DEL</button>
          <button
            onClick={() => {
              onclick("+");
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              onclick("-");
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              onclick("*");
            }}
          >
            x
          </button>
        </div>
      </div>
      <div className="bottom">
        <button onClick={onreset}>RESET</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
};

export default Operators;
