// Hooks can Not be placed in Blocks
// The useState Hook can Not be used in Class Components

import React, { useState } from "react";
import "./App.css";

const amount2Initial = () => {
  return 50;
};

function App() {
  // amount is our current state and setAmount is the function that allow us to update the state

  const [amount, setAmount] = useState(0);

  // The following example will avoid useState to be rendered more than once

  const [amount2, setAmount2] = useState(() => amount2Initial());

  // The following example illustrate how to use useState with objects

  const [state, setState] = useState({
    amount3: 999,
    color: "purple",
    backgroundColor: "yellow",
  });
  const amount3 = state.amount3;
  const color = state.color;
  const backgroundColor = state.backgroundColor;

  // We use prevCount instead of count below, because if we should repeat setAmount(count - 1) more
  // than once it will only subtract 1 from count. By using prevCount the update will take place,
  // no matter how many times we repeat setCount(prevCount => prevCount - 1)

  const handleDecrementation1 = () => {
    setAmount((prevAmount) => prevAmount - 1);
    setAmount2((prevAmount2) => prevAmount2 - 10);
  };

  const handleIncrementation1 = () => {
    setAmount((prevAmount) => prevAmount + 1);
    setAmount2((prevAmount2) => prevAmount2 + 20);
  };

  // Important to know that when the hook is getting updated for objects, that the
  // previous values through the spread operator should also be updated, seeing that
  // it is not getting merge in the object automatically

  const handleDecrementation2 = () => {
    document.getElementById("h4").style.color = color;
    document.getElementById("h4").style.backgroundColor = backgroundColor;
    setState((prevState) => {
      return { ...prevState, amount3: prevState.amount3 - 1 };
    });
  };

  const handleIncrementation2 = () => {
    setState((prevState) => {
      return { ...prevState, amount3: prevState.amount3 + 1 };
    });
  };
  return (
    <div className="App">
      <div className="amount">
        <pre>Amount 1 + Amount 2</pre>
        <button id="button1" className="button" onClick={handleDecrementation1}>
          -
        </button>
        <p>{amount}</p>
        <button id="button2" className="button" onClick={handleIncrementation1}>
          +
        </button>
        <p>{amount2}</p>
      </div>
      <div className="amount">
        <pre>Amount 3</pre>
        <button id="button3" className="button" onClick={handleDecrementation2}>
          -
        </button>
        <h4 id="h4">{amount3}</h4>
        <button id="button4" className="button" onClick={handleIncrementation2}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
