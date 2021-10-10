import React, { useState, useEffect } from 'react'
import './form.css';

const EditProductForm = props => {
  const [ product, setProduct ] = useState(props.currentProduct)

  useEffect(
    () => {
      setProduct(props.currentProduct)
    },
    [ props ]
  )
 

  const handleInputChange = event => {
    const { name, value } = event.target

    setProduct({ ...product, [name]: value })
  }

  return (
    <form class= 'form-register'
      onSubmit={event => {
        event.preventDefault()

        props.updateProduct(product.id, product)
      }}
    >
      <h4>Información de los productos</h4>
      <h6> Modificar el producto </h6>
      <input class= 'controls' type="text" name="descripcion" value={product.descripcion} onChange={handleInputChange} />
      <input class= 'controls' type="text" name="marca" value={product.marca} onChange={handleInputChange} />
      <input class= 'controls' type="text" name="valor" value={product.valor} onChange={handleInputChange} />
      <input class= 'controls' type="text" name="estado" value={product.estado} onChange={handleInputChange} />
      <button className="btn btn-warning" > Actualizar Producto </button>
      
    </form>
  )
}

export default EditProductForm;