
import './App.css';
import PropertyList from './PropertyList';

const properties = [
  { id: 129031, name: 'Desert Yurt', rating: 4.9, price: 150 },
  { id: 129032, name: 'Desert Mountain', rating: 4.8, price: 250 },
  { id: 129033, name: 'Cactus Retreat', rating: 4.5, price: 350 },
  { id: 129034, name: 'Oceanview Condo', rating: 4.7, price: 450 }
];
function App() {
  return (
    <div>
      <PropertyList properties={properties} />
    </div>
  )
}

export default App;
