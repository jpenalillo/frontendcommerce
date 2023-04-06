import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function LoginCM() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

    //Función al enviar el formulario

    
  async function enviarFormulario(e) {
    e.preventDefault()
    
 
    try {
      if (!email || !password) return alert("Email y password obligatorias");
          const endpoint = "https://ecommerceplants.fly.dev/login/";
          const response = await fetch(endpoint, {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json'
                          },
                          body: JSON.stringify({
                            "email":email,
                            "password":password
                        })
            });
        const data = await response.text()
        if(response.status == 401){
          alert('Datos incorrectos 😔' )
        }else{
          localStorage.setItem("token", data);
          navigate("/");
        }
  } catch ({ response: { data: message } }) {
    alert(message + " 🙁");
    console.log(message);
  }
  }
  return (

    <div className="form">
      <h1>Login</h1>
      <form onSubmit={enviarFormulario} method="POST">

      <Form.Group className="mb-2 text-start" controlId="formBasicEmail">
        <FloatingLabel key="emailUser" label="Email" className="mb-3" >
            <Form.Control type="email" placeholder="Ingresa tu email" name='email' onChange={(e)=> setEmail(e.target.value)} />
        </FloatingLabel>
        <Form.Text className="text-muted">Nunca compartiremos tu correo electrónico con nadie más.</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 text-start">
        <FloatingLabel key="pass"   label="Password">
            <Form.Control type="password" placeholder="Ingresa tu Password" id='passwd' name="password" onChange={(e)=> setPassword(e.target.value)}/>
        </FloatingLabel>
      </Form.Group>
      
      <Button variant="dark" type="submit">
        Iniciar Sesión
      </Button>
        </form>
    </div>
  )
}