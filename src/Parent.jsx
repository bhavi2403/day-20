import React from "react";
import Child from "./Child";

function Parent({ message }) {
  return (
    <div style={{ margin: "10px 0" }}>
      <h3>Parent Component</h3>
      <Child message={message} />
    </div>
  );
}

export default Parent;
