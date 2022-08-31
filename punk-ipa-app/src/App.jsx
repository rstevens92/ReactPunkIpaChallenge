import React, { useState, useEffect } from 'react';
import './App.css';
import BeerCard from "./Components/BeerCard";
import NavBar from './Components/NavBar';

function App() {

  const [beers, setbeers] = useState([]);

  const getBeers = () => (
    fetch("https://api.punkapi.com/v2/beers")
        .then((response) => response.json())
        .then(jsonresponse => {setbeers(jsonresponse);})
        .catch((error) => {
          console.error(error)
        })
  );

  useEffect(() =>{
    getBeers();
  }, []);

  return (
    <div>
      <NavBar />
      {beers.map(beer => <BeerCard beer={beer}/>)}
    </div>
  );
}

export default App;
