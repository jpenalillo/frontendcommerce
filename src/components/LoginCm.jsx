import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";


export default function LoginCM() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

    //Función al enviar el formulario

    
  async function enviarFormulario(e) {
    e.preventDefault()
    
 
    const endpoint = "https://ecommerce.juanpenailillo.repl.co/login/";
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
    localStorage.setItem("token", data);
    navigate("/");
  }
  return (
    <div className="form">
      <h1>Login</h1>
      <form onSubmit={enviarFormulario} method="POST">
        <div className="input-container">  
          <label>Usuario:</label>
            <input type="text" name="user" onChange={(e)=> setEmail(e.target.value)}/> <p></p>
        </div>
        <div className="input-container">
            <label>Password:</label>
              <input type="password" name="password"  onChange={(e)=> setPassword(e.target.value)}/> <p></p>
            
        </div>
        
        <div className="input-container">
          <input type="submit" value="Enviar" />
        </div>
         
        </form>
    </div>
  )
}