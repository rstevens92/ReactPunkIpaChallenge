import React, { useState, useEffect } from 'react';
import './App.css';
import BeerCard from "./Components/BeerCard";
import NavBar from './Components/NavBar';

function App() {

  const [APIbeers, setAPIbeers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [checkedHighABV, filterHighABV] = useState(false);
  const [checkedVintage, filterVintage] = useState(false);
  const [checkedPH, filterPH] = useState(false);
  const [filterBeers, setFilterBeers] = useState([]);

  const getBeers = () => (
    fetch("https://api.punkapi.com/v2/beers")
        .then((response) => response.json())
        .then(jsonresponse => {setAPIbeers(jsonresponse); setFilterBeers(jsonresponse);})
        .catch((error) => {
          console.error(error)
        })
  );

  useEffect(() =>{
    getBeers();
  }, []);

  useEffect(() => {
    if (APIbeers) {
      if (searchText) {
        setFilterBeers(APIbeers.filter((beer) => filterBeerName(beer, searchText)))
      } else if(checkedHighABV) {
        setFilterBeers(APIbeers.filter((beer) => highABV(beer)));
      } else if(checkedVintage) {
        setFilterBeers(APIbeers.filter((beer) => vintagebeer(beer)));
      } else if(checkedPH) {
        setFilterBeers(APIbeers.filter((beer) => highPH(beer)));
      } else {
        setFilterBeers(APIbeers);
      }
    } else {
      console.log("API not called yet");
    }
  }, [searchText, checkedHighABV, checkedVintage, checkedPH]);

  const filterBeerName = (beer, searchText) => {
    if (beer.name.toLowerCase().includes(searchText.toLowerCase())){
      return true;
    }
    return false;
  }

  const highABV = (beer) => {
    if(beer.abv > 6){
      return true;
    }
    return false;
  }

  const vintagebeer = (beer) => {
    if(Number(beer.first_brewed.slice(-2)) < 10 ){
      return true;
    } 
    return false;
  }

  const highPH = (beer) => {
   if(beer.ph < 4){
    return true;
   }
   return false;
  }

  return (
    <div>
      <NavBar setSearchText={setSearchText} filterHighABV={filterHighABV} filterVintage={filterVintage} filterPH={filterPH} />
      {filterBeers.map(beer => <BeerCard beer={beer}/>)}
    </div>
  );
}

export default App;
