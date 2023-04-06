import React from 'react'
import '../assets/css/main.css'
import NavBarPizza from '../components/NavBarPlantas'
export default function Success() {
  const token = localStorage.getItem("token");
  let boton = ''
  if(token){
    boton = <a href="/Miscompras" className="btn btn-secondary">Ir a mis compras</a>
  }
  return (
    <>
        <NavBarPizza/>
        <div className='text-center'>
        
            <h1>¡Felicidades por tu compra!</h1>
            <h5>Te avisamos por correo la fecha de entrega de el envío de tu compra</h5>
            <a href='/' className='btn btn-secondary'>Volver al home</a>
        </div>
    </>
  )
}
