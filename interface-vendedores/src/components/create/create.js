import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

/*
const Create = () => (
    <Form className="create-form">
        <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
    </Form>
)

export default Create;*/

export default function Create() {
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
            <h3>Registro Datos</h3>
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
                <Button color="green" onClick={postData} type='submit'>Registrar</Button>
                <Link to='/'>
                    <Button color="red">Cancelar</Button>
                </Link>
            </Form>
        </div>
    )
}