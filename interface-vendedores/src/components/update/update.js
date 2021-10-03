import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function Update() {
    const [Nombre, setFirstName] = useState('');
    const [Apellidos, setLastName] = useState('');
    const [Cedula, setId] = useState('');
    const [Celular, setCellphone] = useState('');
    const [Edad, setAge] = useState('');
    const [Email, setEmail] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = () => {
        console.log(Nombre);
        console.log(Apellidos);
        console.log(Cedula);
        console.log(Celular);
        console.log(Edad);
        console.log(Email);
        console.log(checkbox);
    }
    return (
        <div>
            <h3>Actualizar Datos</h3>
            <Form className="create-form">
                <Form.Field>
                    <label>Nombre</label>
                    <input placeholder='Nombre' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Apellidos</label>
                    <input placeholder='Apellidos' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Cedula</label>
                    <input placeholder='Cedula' onChange={(e) => setId(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Celular</label>
                    <input placeholder='Celular' onChange={(e) => setCellphone(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Edad</label>
                    <input placeholder='Edad' onChange={(e) => setAge(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>E-mail</label>
                    <input placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Marque la casilla si estudia y trabaja' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button color="blue" onClick={postData} type='submit'>Actualizar</Button>
                <Link to='/'>
                    <Button color="red">Cancelar</Button>
                </Link>
            </Form>
        </div>
    )
}