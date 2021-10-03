import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'semantic-ui-react'
export default function Read() {
    return (
        <div>
            <Table inverted>
                <Table.Header className="App">
                    <Table.Row>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Apellidos</Table.HeaderCell>
                        <Table.HeaderCell>Cedula</Table.HeaderCell>
                        <Table.HeaderCell>Celular</Table.HeaderCell>
                        <Table.HeaderCell>Edad</Table.HeaderCell>
                        <Table.HeaderCell>E-mail</Table.HeaderCell>
                        <Table.HeaderCell>Estudia y Trabaja</Table.HeaderCell>
                        <Table.HeaderCell>Actualizar Datos</Table.HeaderCell>
                        <Table.HeaderCell>Eliminar Perfil</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body className="App">
                    <Table.Row>
                        <Table.Cell>Andres Felipe</Table.Cell>
                        <Table.Cell>Rodriguez Lopez</Table.Cell>
                        <Table.Cell>1.457.815.445</Table.Cell>
                        <Table.Cell>3175468855</Table.Cell>
                        <Table.Cell>27</Table.Cell>
                        <Table.Cell>afrodriguez@gmail.com</Table.Cell>
                        <Table.Cell>No</Table.Cell>
                        <Link to='/actualizar-info-vendedor'>
                            <Table.Cell>
                                <Button color="blue">Actualizar</Button>
                            </Table.Cell>
                        </Link>
                        <Table.Cell><Button color="red">Eliminar</Button></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Isabel Sofia</Table.Cell>
                        <Table.Cell>Perez Fernandez</Table.Cell>
                        <Table.Cell>1.384.125.157</Table.Cell>
                        <Table.Cell>3151548445</Table.Cell>
                        <Table.Cell>22</Table.Cell>
                        <Table.Cell>isfernandez@gmail.com</Table.Cell>
                        <Table.Cell>si</Table.Cell>
                        <Link to='/actualizar-info-vendedor'>
                            <Table.Cell>
                                <Button color="blue">Actualizar</Button>
                            </Table.Cell>
                        </Link>
                        <Table.Cell><Button color="red">Eliminar</Button></Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            <Link to='/registrar-vendedor'>
                <Button color="green">Registrar Vendedor</Button>
            </Link>
        </div>
    )
}