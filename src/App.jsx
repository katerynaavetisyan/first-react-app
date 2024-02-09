
import PropertyList from './PropertyList';
import ShoppingList from './ShoppingList';
import Clicker from './Clicker';

const data = [
  { id: 1, item: 'eggs', quantity: 12, completed: false },
  { id: 2, item: 'pasta', quantity: 1, completed: true },
  { id: 3, item: 'carrot', quantity: 2, completed: true },
  { id: 4, item: 'apples', quantity: 4, completed: false },
];

const properties = [
  { id: 129031, name: 'Desert Yurt', rating: 4.9, price: 150 },
  { id: 129032, name: 'Mountain', rating: 4.8, price: 250 },
  { id: 129033, name: 'Cactus Retreat', rating: 4.5, price: 350 },
  { id: 129034, name: 'Oceanview Condo', rating: 4.7, price: 450 }
];
function App() {
  return (
    <div>
      <Clicker />
      {/* <PropertyList properties={properties} /> */}
      {/* <ShoppingList items={data} /> */}
    </div>
  )
}

export default App;
