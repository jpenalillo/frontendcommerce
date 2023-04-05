import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
export default function SignupForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [nombre, setNombre] = useState("")
  const [direccion, setDireccion] = useState("")
  const [telefono, setTelefono] = useState("")
    //Función al enviar el formulario

    
  async function enviarFormulario(e) {
    const navigate = useNavigate();
    e.preventDefault()
    
 
    const endpoint = "https://ecommerce.juanpenailillo.repl.co/usuarios";
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
    const data = await response.text()
    navigate("/Login");
  }
  return (
    <div className="form">
        <h1>Registrarse</h1>

      <form onSubmit={enviarFormulario} method="POST">
        <div className="input-container">  
          <label>Nombre:</label>
            <input type="text" name="user" onChange={(e)=> setNombre(e.target.value)}/> <p></p>
        </div>
        <div className="input-container">  
          <label>Email:</label>
            <input type="text" name="user" onChange={(e)=> setEmail(e.target.value)}/> <p></p>
        </div>
        <div className="input-container">
            <label>Password:</label>
              <input type="password" name="password"  onChange={(e)=> setPassword(e.target.value)}/> <p></p>
            
        </div>
        
        <div className="input-container">  
          <label>Dirección:</label>
            <input type="text" name="user" onChange={(e)=> setDireccion(e.target.value)}/> <p></p>
        </div>
        
        <div className="input-container">  
          <label>Teléfono:</label>
            <input type="text" name="user" onChange={(e)=> setTelefono(e.target.value)}/> <p></p>
        </div>
        
        <div className="input-container">
          <input type="submit" value="Enviar" />
        </div>
         
        </form>
    </div>
  )
}