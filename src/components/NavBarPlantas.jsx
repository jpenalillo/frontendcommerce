import {React,useContext} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ProductContext from '../contexts/ProductContext';
import { Link } from "react-router-dom";
export default function NavBarPlantas() {
  const { products} = useContext(ProductContext)
  const token = localStorage.getItem("token");
  let botones;
  
    if(token){
      botones = <><Link to={`/Miscompras`}>  | Mis Compras</Link><Link to={`/Logout`}>  | Logout</Link></>
      
    }else{
      botones = <><Link to={`/Login`}>  | Login</Link><Link to={`/Signup`}>| Registrarse</Link></>
    }
  return (
    <>
    <Navbar className='navbar-dark bg-dark'>
      <Container>
        <Navbar.Brand href="/">🌲Vivero Panchita</Navbar.Brand>
          <Navbar.Text>
            <Link to={`/Carrito`}>
            🛒 {
                    products.reduce((x,s)=> x + s.price,0)
            }
            </Link>
            {botones}
            <></>
          </Navbar.Text>
        </Container>
    </Navbar>
    </>
  )
}
