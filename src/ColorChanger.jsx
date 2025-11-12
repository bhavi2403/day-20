import React,{useState} from "react";

function ColorChanger() {

    const [color, setColor] = useState("black");

    const changeColor = () => {
        const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(randomColor);
    };

    return (
       <div
      style={{
        backgroundColor: color,
        padding: "30px",
        textAlign: "center",
        borderRadius: "10px",
        margin: "10px 0",
      }}
    >
      <h3>Color Changer</h3>
      <button onClick={changeColor}>Change Color</button>
    </div>

    );
}

export default ColorChanger;
