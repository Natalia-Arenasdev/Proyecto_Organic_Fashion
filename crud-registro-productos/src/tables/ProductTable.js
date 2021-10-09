import React from 'react';
import './ProductTable.css';

const ProductTable = props => (

  <div class="container">
    <h2>Ver productos</h2>
    <table class="table">
      <thead>
        <tr>
          <th> ID </th>
          <th> Descripción </th>
          <th> Marca </th>
          <th> Valor </th>
          <th> Estado </th>
        </tr>
      </thead>
      <tbody>
        {props.products.length > 0 ? (
          props.products.map(product => (
            <tr>
              <td>{product.id}</td>
              <td>{product.descripcion}</td>
              <td>{product.marca}</td>
              <td>{product.valor}</td>
              <td>{product.estado}</td>
              <td>
                <button onClick={() => {
                    props.editRow(product)
                  }}
                  className="button muted-button"
                >
                  Editar
                </button>
                <button
                  onClick={() => props.deleteProduct(product.id)}
                  className="button muted-button"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5}> No hay datos en la tabla </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>


)

export default ProductTable;