import React,  { useState } from 'react';
import styles from './NavBar.module.scss';

const NavBar = () => {
  const [inputText, setInputText] = useState("");

  return (
    <div className={styles.NavBar}>
      <h1 className={styles.header}>Brew Dog Beer Archive</h1>
      <input type="text" name='Search' placeholder='Search' className={styles.searchbar}/>
      <label for="HighABV">High Abv:</label>
      <input type="checkbox" name="HighABV" className={styles.checkbox}/>
      <label for="Classic">Classic Range:</label>
      <input type="checkbox" name="Classic" className={styles.checkbox}/>
      <label for="Acidic">Acidic:</label>
      <input type="checkbox" name="Acidic" className={styles.checkbox}/>
    </div>
  )
}

export default NavBar