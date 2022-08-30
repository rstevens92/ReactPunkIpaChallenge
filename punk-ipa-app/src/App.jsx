import React from 'react';
import './App.css';
import BeerCard from "./Components/BeerCard";
import NavBar from './Components/NavBar';
import beers from './data/beers';


// fetch("https://api.punkapi.com/v2/beers")
//     .then((response) => response.json())
//     .then(jsonresponce => jsonresponce)

function App() {
  return (
    <div>
      <NavBar />
      {beers.map(beer => <BeerCard beer={beer}/>)}
    </div>
  );
}

export default App;
