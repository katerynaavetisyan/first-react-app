import Chicken from "./Chicken";
import './App.css'
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";
import ColorList from "./ColorList";

function App() {
  return (
    <div>
      <ColorList colors={["red", "green", "yellow", "violet"]} />


      <Heading color="Magenta" text="Welcome" fontSize="20px" />
      <DoubleDice />
      <DoubleDice />
      <Heading color="Orange" text="Bye" fontSize="30px" />
      {/* <DoubleDice />
      <ListPicker values={[1, 2, 3]} />
      <ListPicker values={["a", "b", "c"]} />
      <ListPicker values={{ a: 1, b: 2 }} />
      <Greeter person="Artur" />
      <Greeter from="Colt" />
      <Greeter person="David" from="Neighbor" />
      <Die numSides={20} />
      <Die />
      <Die numSides={10} /> */}
    </div>
  )
}

export default App
