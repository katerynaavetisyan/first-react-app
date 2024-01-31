
import './App.css'
import Slots from "./Slots";
import ShopingList from './ShoppingList';
const data = [
  { id: 1, item: 'eggs', quantity: 12, completed: true },
  { id: 2, item: 'apples', quantity: 3, completed: false },
  { id: 3, item: 'cookies', quantity: 6, completed: true },
  { id: 4, item: 'milk', quantity: 1, completed: false }
]
function App() {
  return (
    <div>
      <ShopingList items={data} />
      {/* <Slots val1="🍒" val2="🍒" val3="🍒" />
      <Slots val1="🍒" val2="🍌" val3="🍒" /> */}
    </div>
  )
}

export default App
