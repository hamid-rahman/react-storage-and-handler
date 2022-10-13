import logo from './logo.svg';
import './App.css';
import Shoes from './components/shows/Shoes';
import Cosmetics from './components/cosmetics/Cosmetics';

function App() {
  return (
    <div className="App">
      <Shoes></Shoes>
      <Cosmetics></Cosmetics>
    </div>
  );
}

export default App;
