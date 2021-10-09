import React from 'react';
import './ProductTable.css';

const ProductTable = props => (

  <div className="container">
    <h4>Tabla de Productos </h4>
    <table className="table">
      <thead>
        <tr>
          <th> ID </th>
          <th> Descripción </th>
          <th> Marca </th>
          <th> Valor </th>
          <th> Estado </th>
          <th> Acciones </th>
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
                  className="btn btn-info"
                >
                  Editar
                </button>
                <button
                  onClick={() => props.deleteProduct(product.id)}
                  className="btn btn-danger"
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