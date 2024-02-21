import axios from 'axios'

export const CarService = {
	async getAllUser() {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/users'
		)
		return response.data
	},
	async getUserById(id) {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/users/${id}`
		)
		return response.data
	},
}
