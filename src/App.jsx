import react from "react";
import Greetings from "./Greetings";
import ColorChanger from "./ColorChanger";
import Toggle from "./Toggle";
import Counter from "./Counter";
import TaskList from "./TaskList";
import ButtonLogger from "./ButtonLogger";
import Child from "./Child";

function App() {
  return (
    <div style={{ textAlign: "center"}}>
      <Greetings name="Bhavi" />
      <ColorChanger />
      <Toggle />
      <Counter step={2} />
      <TaskList tasks={["React", "JSX", "State"]} />
      <ButtonLogger />
      <Child message="Hello from App Component!" />
      
    </div>
  );
}

export default App;