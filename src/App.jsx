import Chicken from "./Chicken";
import './App.css'
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";

function App() {
  return (
    <div>
      <DoubleDice />
      <DoubleDice />
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
