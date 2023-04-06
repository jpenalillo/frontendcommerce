import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

export default function SignupForm() {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [nombre, setNombre] = useState("")
  const [direccion, setDireccion] = useState("")
  const [telefono, setTelefono] = useState("")
    //Función al enviar el formulario

    
    const navigate = useNavigate();
  async function EnviarFormulario(e) {
      e.preventDefault()
      if(email === '' && password === '' && nombre === ''){
        alert('Faltan campos obligatorios')
      }else{    
          try {
            const endpoint = "https://ecommerceplants.fly.dev/usuarios";
            const response = await fetch(endpoint, {
                                method: 'POST',
                                headers: {
                                  'Content-Type': 'application/json'
                                  },
                                  body: JSON.stringify({
                                    "email":email,
                                    "password":password,
                                    "nombre":nombre,
                                    "direccion":direccion,
                                    "telefono":telefono
                                })
              });
            navigate("/Login");
          } catch ({ response: { data: message } }) {
            alert(message + " No hay data");
            console.log(message);
          }
      }
  }
  return (
    <div className="form">
        <h1>Registrarse</h1>
      <form onSubmit={EnviarFormulario} method="POST"  style={{width:"30%"}} className='col-lg-6 offset-lg-4'>
        <FloatingLabel key="nombreComple" controlId="floatingInput" label="Nombre Completo *" className="mb-3" >
            <Form.Control type="text" placeholder="Indique su nombre completo" className='nombre' name="nombre" required onChange={(e)=> setNombre(e.target.value)}/>
        </FloatingLabel>
        <Row>
            <Col>
                <FloatingLabel key="emailUser" controlId="floatingInput2" label="Email *" className="mb-3" >
                    <Form.Control type="email" placeholder="name@example.com" name='email' required onChange={(e)=> setEmail(e.target.value)}/>
                </FloatingLabel>
            </Col>
        </Row>
            <Row >
                <Col>
                    <FloatingLabel key="pass"   label="Password *">
                        <Form.Control type="password" placeholder="Password" id='passwd' name="password" onChange={(e)=> setPassword(e.target.value)} required />
                    </FloatingLabel>
                </Col>
            </Row>
        <FloatingLabel key="dir" controlId="floatingInput3" label="Direccion" className="mb-3" >
            <Form.Control type="text" placeholder="Complete su dirección" name='direccion' onChange={(e)=> setDireccion(e.target.value)}/>
        </FloatingLabel>
        <Row className="mb-3">
            <Col>
                <FloatingLabel key="telf" controlId="floatingTelefono" label="Telefono">
                    <Form.Control type="text" placeholder="+56 00000000" name='telefono' onChange={(e)=> setTelefono(e.target.value)}/>
                </FloatingLabel>
            </Col>
        </Row>
        <Button variant="dark" onClick={EnviarFormulario}>Guardar</Button>
        </form>
    </div>
  )
}