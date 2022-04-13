import React, { useState } from "react";
import Display from "./Display";
import Operators from "./Operators";

function App() {
  const [calc, setCalc] = useState("");

  const handleDisplay = (value) => {
    setCalc(calc + value);
  };

  const handleCalculation = () => {
    try {
      setCalc(eval(calc).toString());
    } catch {
      setCalc("Syntax Error");
    }
  };

  const handleDelete = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const handleReset = () => {
    setCalc(0);
  };

  return (
    <div className="App">
      <div className="calculator">
        <header>
          <h1>calc</h1>
          <div className="theme">
            <p>Theme</p>
            <div className="toggler">
              <div className="toggle">
                <span>1</span>
                <input type="radio" className="toggle-1" checked />
              </div>
              <div className="toggle">
                <span>2</span>
                <input type="radio" className="toggle-2" />
              </div>
              <div className="toggle">
                <span>3</span>
                <input type="radio" className="toggle-3" />
              </div>
            </div>
          </div>
        </header>
        <Display value={calc || "0"} />
        <Operators
          onclick={handleDisplay}
          calculate={handleCalculation}
          onreset={handleReset}
          del={handleDelete}
        />
      </div>
    </div>
  );
}
export default App;
