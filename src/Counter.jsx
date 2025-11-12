import React, { useState } from "react";

function Counter({ step }) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: "10px 0" }}>
      <h3>Counter with Step ({step})</h3>
      <button onClick={() => setCount(count - step)}>-</button>
      <span style={{ margin: "0 10px" }}>{count}</span>
      <button onClick={() => setCount(count + step)}>+</button>
    </div>
  );
}

export default Counter;
