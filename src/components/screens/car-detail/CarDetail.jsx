import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { withAuth } from '../../../HOC/withAuth'
import carsData from '../../../data/cars.json'
import { CarService } from '../../../services/car.service'
import CarItem from '../home/car-item/CarItem'

const CarDetail = () => {

	const { id } = useParams()
	const [userById, setUserById] = useState(null)
	// Получение информации о пользователе по ID

	useEffect(() => {
		if (!id) return
		const fetchData = async () => {
			const user = await CarService.getUserById(id)
			setUserById(user)
		}
		fetchData()
	}, [id])

	return (
		<>
			<Link to='/' style={{
				color: 'white',
				fontSize: '24px'
			}}>Back</Link>
			{userById ?
				<div>
					<h2>Car Detail by {id} user</h2>
					<p>Name: {userById.name}</p>
					<p>Email: {userById.email}</p>
				</div> : <p>Нет пользователя</p>}
			<hr />
			<CarItem
				car={carsData[id]} />
		</>
	)
}

export default withAuth(CarDetail)