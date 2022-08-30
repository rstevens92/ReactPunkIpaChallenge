import React, { useState } from 'react';
import styles from './BeerCard.module.scss';

const BeerCard = (props) => {
  const { image_url, name, abv, tagline, description } = props.beer;
  // const [beers, getBeers] = useState([])

  return (
    <section className={styles.beercard}>
        <img className={styles.img} src={image_url} alt="beer picture"></img>
        <h1 className={styles.header}>{name}</h1>
        <h2 className={styles.subheader}>{abv}% abv</h2>
        <h2 className={styles.subheader}>{tagline}</h2>
        <p className={styles.description}>{description}</p>
    </section>
  )
}

export default BeerCard