import React, { useState, Fragment } from 'react';
import AddProductForm from './form/AddProductForm';
import EditProductForm from './form/EditProductForm';
import ProductTable from './tables/ProductTable'; 
import './App.css';

const App = () => {
	// Data
	const ProductsData = [
		{ id: "1", descripcion: "Leggings", marca: "Nike", valor: "$65.000", estado: "Disponible" },
	]

	const initialFormState = { id: null, descripcion: '', marca: '', valor:"", estado:"" }

	// Setting state
	const [ products, setProducts ] = useState(ProductsData)
	const [ currentProduct, setCurrentProduct ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addProduct = product => {
		product.id = products.length + 1
		setProducts([ ...products, product ])
	}

	const deleteProduct = id => {
		setEditing(false)

		setProducts(products.filter(product => product.id !== id))
	}

	const updateProduct = (id, updatedProduct) => {
		setEditing(false)

		setProducts(products.map(product => (product.id === id ? updatedProduct : product)))
	}

	const editRow = product => {
		setEditing(true)

		setCurrentProduct({ id: product.id, descripcion: product.descripcion, marca: product.marca, valor: product.valor, estado: product.estado })
	}

	return (
		<div class="container">
				<div>
					{editing ? (
						<Fragment>
							
							<EditProductForm
								editing={editing}
								setEditing={setEditing}
								currentProduct={currentProduct}
								updateProduct={updateProduct}
							/>
						</Fragment>
					) : (
						<Fragment>
							<AddProductForm addProduct={addProduct} />
						</Fragment>
					)}
				</div>
				<div>
					<ProductTable products={products} editRow={editRow} deleteProduct={deleteProduct} />
				</div>
			</div>
	)
}

export default App;