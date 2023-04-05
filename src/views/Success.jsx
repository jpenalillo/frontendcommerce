import React from 'react'
import '../assets/css/main.css'
import NavBarPizza from '../components/NavBarPlantas'
export default function Success() {
  return (
    <>
        <NavBarPizza/>
        <h1>¡Felicidades por tu compra!</h1>
        <p>Te avisamos por correo la fecha de entrega de el envío de tu compra</p>
        <a href='/'>Volver al home</a> | <a href='/Miscompras'>Ir a mis compras</a>
    </>
  )
}
