import React, { useState, useEffect } from 'react';
import styles from'./App.module.scss';
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
      if (searchText || checkedHighABV || checkedVintage || checkedPH) {
        setFilterBeers(
          APIbeers
          .filter((beer) => checkedHighABV ? highABV(beer) : true)
          .filter((beer) => checkedVintage ? vintageBeer(beer) : true)
          .filter((beer) => checkedPH ? acidicPH(beer) : true)
          .filter((beer) => searchText ? filterBeerName(beer, searchText) : true)
        )
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

  const vintageBeer = (beer) => {
    if(Number(beer.first_brewed.slice(-2)) < 10 ){
      return true;
    } 
    return false;
  }

  const acidicPH = (beer) => {
   if(beer.ph < 4){
    return true;
   }
   return false;
  }

  return (
    <div className={styles.wholePage}>
      <NavBar setSearchText={setSearchText} filterHighABV={filterHighABV} filterVintage={filterVintage} filterPH={filterPH} />
      <div className={styles.cardContainer}>
      {filterBeers.map(beer => <BeerCard beer={beer}/>)}
      </div>
    </div>
  );
}

export default App;
