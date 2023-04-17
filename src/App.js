import './App.css';
import { Routes, Route } from "react-router-dom";

import RandomDrink from './Components/RandomDrink/random_drink';
import Home from './Components/Home/home';
import CocktailSearch from'./Components/CocktailSearch/cocktail_search';
import Navbar from './Components/Navbar/navbar';
import Recipes from './Components/Recipes/recipes';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/my-recipes" element={<Recipes/>} />
          <Route exact path="/search" element={<CocktailSearch/>} />
          <Route path="/randomdrink" element={<RandomDrink/>} />
      </Routes>
    </div>
  );
}

export default App;
