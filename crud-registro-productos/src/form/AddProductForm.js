import React, { useState } from 'react'
import './form.css';

const AddProductForm = props => {
	const initialFormState = { id: "", descripcion: '', marca:"", valor:"", estado:"" }
	const [ product, setProduct ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setProduct({ ...product, [name]: value })
	}

	return (
		
		<form class= 'form-register'
			onSubmit={event => {
				event.preventDefault()
				if (!product.id || !product.descripcion || !product.marca || !product.valor || !product.estado) return

				props.addProduct(product)
				setProduct(initialFormState)
			}}
		>
			<h4> Añadir producto </h4>
			<input class= 'controls' type="text" name="id" value={product.id} onChange={handleInputChange}  placeholder= "Ingrese el id"/>
			<input  class= 'controls' type="text" name="descripcion" value={product.descripcion} onChange={handleInputChange} placeholder= "Ingrese la descripción"/>
			<input class= 'controls' type="text" name="marca" value={product.marca} onChange={handleInputChange}  placeholder= "Ingrese la marca"/>
			<input class= 'controls' type="text" name="valor" value={product.valor} onChange={handleInputChange} placeholder= "Ingrese el valor"/>
			<input class= 'controls' type="text" name="estado" value={product.estado} onChange={handleInputChange} placeholder= "Ingrese el estado"/>
			<button class= 'botons'> Agregar </button>
		</form>
	)
}

export default AddProductForm;