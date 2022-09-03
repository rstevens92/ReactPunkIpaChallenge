import React,  { useState } from 'react';
import styles from './NavBar.module.scss';

const NavBar = (props) => {

  const { setSearchText, filterHighABV, filterVintage, filterPH } = props;

  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value)
  }

  const handleCheckboxChangeABV = (event) => {
      filterHighABV(event.target.checked);
  }

  const handleCheckboxChangeVintage = (event) => {
    filterVintage(event.target.checked)
  }

  const handleCheckboxChangePH = (event) => {
    filterPH(event.target.checked)
  }

  return (
    <div className={styles.NavBar}>
      <h1 className={styles.header}>Brew Dog Beer Archive</h1>
      <input type="text" name='Search' placeholder='Search' className={styles.searchbar} onChange={handleSearchInputChange} />
      <label htmlFor="HighABV">High Abv:</label>
      <input type="checkbox" name="HighABV" className={styles.checkbox} onChange={handleCheckboxChangeABV} />
      <label htmlFor="Classic">Classic Range:</label>
      <input type="checkbox" name="Classic" className={styles.checkbox} onChange={handleCheckboxChangeVintage} />
      <label htmlFor="Acidic">Acidic:</label>
      <input type="checkbox" name="Acidic" className={styles.checkbox} onChange={handleCheckboxChangePH} />
    </div>
  )
}

export default NavBar