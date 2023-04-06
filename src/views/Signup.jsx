import React from 'react'
import NavBarPlantas from '../components/NavBarPlantas'
import Signup from '../components/SignupForm'
import '../assets/css/main.css'

import { Col, Container, Row } from "react-bootstrap"
export default function Home() {
  return (
    <>
    
        <NavBarPlantas/>
        <Signup/>
    </>
  )
}
