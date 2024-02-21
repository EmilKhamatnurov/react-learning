import { useQuery } from '@tanstack/react-query'
import React, { useContext, useState } from 'react'
import cars from '../../../data/cars.json'
import { AuthContext } from '../../../providers/AuthProvider'
import { CarService } from '../../../services/car.service'
import styles from './Home.module.scss'
import CarItem from './car-item/CarItem'
import CreateCarForm from './create-car-form/CreateCarForm'

const Home = () => {
	const [carsState, setCarsState] = useState(cars)
	const { user, setUser } = useContext(AuthContext)
	const { data, isLoading, error } = useQuery({ queryKey: ['users'], queryFn: CarService.getAllUser }) // Лучшие пользователи сайта, получение с помощью React Query

	if (isLoading) return <p>Loading...</p>

	// Использование навигиции из RRD
	// const nav = useNavigate()
	// Использование контекста AuthProvider

	return (
		<>
			<h1>Cars Catalog</h1>
			{/* Переход к первой машине через useNavigate */}
			{/* <button onClick={() => nav("/car/1")}>Перейти</button> */}
			{user ? <h2>
				Welcome, {user}
			</h2> :
				<button onClick={() => setUser("Эмиль")}>Создать пользователя</button>
			}
			<h2>Лучшие пользователи сайта</h2>
			<div className={styles.users}>
				{data.length ? data.map(user => (
					<div key={user.id} className={styles.user}>
						<p>User Name {user.name}</p>
						<p>User Name {user.email}</p>
					</div>
				)) : "Лучшие пользователи отсутствуют"}
			</div>
			<hr />
			<h2>Машины автосалона</h2>
			<CreateCarForm
				setCars={setCarsState} />
			<div className={styles.items}>
				{carsState.length ? carsState.map(car => (
					<CarItem
						key={car.id}
						car={car} />)) :
					<p>Отсутствуют машины</p>}
			</div>
		</>
	)
}

export default Home