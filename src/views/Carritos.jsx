import {React,useContext} from 'react'
import {useNavigate} from "react-router-dom";
import NavBarPizza from '../components/NavBarPlantas'
import ProductContext from '../contexts/ProductContext';
import Button from 'react-bootstrap/Button';

export default function Carritos() {
  const { products} = useContext(ProductContext)
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  let botones;
    async function enviarFormulario(e) {
      e.preventDefault()
      
  
      const endpoint = "https://ecommerce.juanpenailillo.repl.co/comprar/";
      let objProduct = products;
      const response = await fetch(endpoint, {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + token
                            },
                            body: JSON.stringify(objProduct)
        });
      console.log(response)
      navigate("/success");
    } 
    if(token){
      botones = <><Button className='btn btn-info text-center' onClick={enviarFormulario} >Pagar</Button></>
    }else{
      botones = <></>
    }

  return (
    <>
    <NavBarPizza/>
    <div className='container'>
    <h2 className='text-center'>Detalle del pedido</h2>
    <div className='text-center'>
    <ul>
    {
                            products
                              .map(item =>
                                <div className='row'>
                                  <div className='col-sm' style={{textAlign: "left"}}>{item.name}</div>
                                  <div className='col-sm'>{item.price}</div>
                                </div>
                            )
                        }




    </ul>
    </div>
    <div className='text-center'>
      <h5>TOTAL: {
                    products.reduce((x,s)=> x + s.price,0)
            }</h5>
    </div>
    <div className='text-center'>
            {botones}
    </div>
    </ div>
    </>
  )
}
