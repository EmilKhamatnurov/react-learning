import React, { useState } from 'react'
import styles from './CreateCarForm.module.scss'
function CreateCarForm({ setCars }) {
	const clearFormData = {
		name: '',
		price: 0,
		image: ''
	}
	const [form, setForm] = useState(clearFormData)

	function handleFormChange(element) {
		const { name, value } = element
		setForm({
			...form,
			[name]: value
		})
	}

	function handleSubmitBtnClick(element) {
		element.preventDefault()
		setCars((prew) => [
			...prew,
			{
				id: prew.length + 1,
				...form
			}
		]
		)
		setForm(clearFormData)
	}

	return (
		<form className={styles.form}>
			<input name='name' value={form.name} onChange={e => handleFormChange(e.target)} placeholder='Name' type="text" />
			<input name='price' value={form.price} onChange={e => handleFormChange(e.target)} placeholder='price' type="number" />
			<input name='image' value={form.image} onChange={e => handleFormChange(e.target)} placeholder='image' type="text" />


			<button onClick={e => handleSubmitBtnClick(e)}> Create New Car</button>
		</form>
	)
}

export default CreateCarForm