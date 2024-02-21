import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../home/Home.module.scss'
import Price from './price/Price'

function CarItem({ car }) {
	const [counter, setcounter] = useState()
	return (
		<div className={styles.item}>
			<img className={styles.item__image} src={car.image} alt={car.name} />
			<div className={styles.item__description}>
				<h2 className={styles.item__name}>{car.name}</h2>
				<Price
					price={car.price} />
				<Link
					className={styles.item__button}
					to={`/car/${car.id}`}
				>Read More</Link>
			</div>
			<button onClick={() => setcounter(counter + 1)}>+ 1</button>
		</div>
	)
}

export default CarItem