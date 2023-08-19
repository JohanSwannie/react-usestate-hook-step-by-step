// Hooks can Not be placed in Blocks
// The useState Hook can Not be used in Class Components

import React, { useState } from "react";
import "./App.css";

const amount2Initial = () => {
  return 50;
};

const blockColorParameters = "01234567890ABCDEF";

const personArray = ["Mary", "Paul", "Jason", "Luke", "Jonathan"];

function App() {
  // The following example will illustrate how to use the useState hook with a boolean

  const [darkTheme, setDarkTheme] = useState(false);

  // amount is our current state and setAmount is the function that allow us to update the state

  const [amount, setAmount] = useState(0);

  // The following example will avoid useState to be rendered more than once

  const [amount2, setAmount2] = useState(() => amount2Initial());

  // The following example will illustrate how to use useState with arrays

  const [persons, setPersons] = useState(["Carlos"]);
  const [index, setIndex] = useState(0);

  // The following example illustrate how to use useState with objects

  const [state, setState] = useState({
    amount3: 999,
    name: "Donovan",
  });
  const amount3 = state.amount3;
  const name = state.name;

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
    setState((prevState) => {
      return { ...prevState, amount3: prevState.amount3 - 10 };
    });
  };

  const handleIncrementation2 = () => {
    setState((prevState) => {
      return { ...prevState, amount3: prevState.amount3 + 20 };
    });
  };

  const handleBlockColor = () => {
    let colorString = "#";
    for (let i = 0; i < 6; i++) {
      let randomDigit = blockColorParameters[Math.floor(Math.random() * 16)];
      colorString += randomDigit;
    }
    document.querySelector(".block").style.backgroundColor = colorString;
    if (persons.length < 6) {
      setPersons((prevPersons) => [...prevPersons, personArray[index]]);
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      setPersons(["Carlos"]);
      setIndex(0);
    }
  };

  const containerStyle = {
    color: darkTheme ? "#FFF" : "#000",
    backgroundColor: darkTheme ? "#000" : "#FFF",
    border: darkTheme ? "2px solid #FFF" : "2px solid #000",
  };

  return (
    <div className="App" style={containerStyle}>
      <button
        className="button"
        onClick={() => setDarkTheme((prevDarkTheme) => !prevDarkTheme)}
      >
        Change Theme
      </button>
      <div className="subcontainer">
        <pre>Amount 1 + Amount 2</pre>
        <button className="button" onClick={handleDecrementation1}>
          -
        </button>
        <p>{amount}</p>
        <button className="button" onClick={handleIncrementation1}>
          +
        </button>
        <p>{amount2}</p>
      </div>
      <div className="subcontainer">
        <pre>Amount 3</pre>
        <button className="button" onClick={handleDecrementation2}>
          -
        </button>
        <h4 id="h4">
          {amount3} &nbsp; &nbsp; for &nbsp; &nbsp; {name}
        </h4>
        <button id="button4" className="button" onClick={handleIncrementation2}>
          +
        </button>
      </div>
      <div className="subcontainer">
        <button className="button" onClick={handleBlockColor}>
          Change Block Color
        </button>
        <div className="block"></div>
        <ul>
          {persons.map((person, index) => (
            <li key={index}>{person}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
