import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './LandingPage/LandingPage';
import Home from './Home/Home';
import CreatePokemon from './CreatePokemon/CreatePokemon';
import Details from './Details/Details';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = '/' element= {<LandingPage/>} />
          <Route path = '/home' element= {<Home/>} />
          <Route path = '/pokemons' element= {<CreatePokemon/>} />
          <Route path = '/pokemons/:id' element= {<Details/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;