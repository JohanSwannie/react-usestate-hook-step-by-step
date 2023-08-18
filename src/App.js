import React, { useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  return (
    <div className="App">
      <button>-</button>
      <p>{amount}</p>
      <button>+</button>
    </div>
  );
}

export default App;
