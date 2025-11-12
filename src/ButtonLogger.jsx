import React, { useState } from "react";

function ButtonLogger() {
  const [lastClicked, setLastClicked] = useState("");

  const handleClick = (buttonName) => {
    console.log(`Button ${buttonName} clicked`);
    setLastClicked(buttonName);
  };

  return (
    <div style={{ margin: "10px 0" }}>
      <h3>Button Click Logger</h3>
      <button onClick={() => handleClick("A")}>A</button>
      <button onClick={() => handleClick("B")}>B</button>
      <button onClick={() => handleClick("C")}>C</button>
      {lastClicked && <p>Last clicked: {lastClicked}</p>}
    </div>
  );
}

export default ButtonLogger;
