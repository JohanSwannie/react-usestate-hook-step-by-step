// Hooks can Not be placed in Blocks
//The useState Hook can Not be used in Class Components
import React, { useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);

  const handleDecrementation = () => {
    setAmount((prevAmount) => prevAmount - 1);
  };

  const handleIncrementation = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };
  return (
    <div className="App">
      <div className="amount">
        <button id="button1" onClick={handleDecrementation}>
          -
        </button>
        <p>{amount}</p>
        <button id="button2" onClick={handleIncrementation}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
