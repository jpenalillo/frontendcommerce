import {React,useState,useEffect,useContext} from 'react'
import NavBarPlantas from '../components/NavBarPlantas'
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ProductContext from '../contexts/ProductContext';
import '../assets/css/main.css'
export default function Plantas() {
  const { id } = useParams();
  const [info, setInfo] = useState([])
  const {product,setProducts} = useContext(ProductContext)
  
  useEffect(() => {
    getPizza()
  }, []);

  
  const getPizza = async () => {
    const data = await fetch(`https://ecommerce.juanpenailillo.repl.co/productos/${id}`)
    const users = await data.json()
    setInfo(users)
  };

  return (
    <>
    
    <NavBarPlantas/>
    
    {
      info.map(item =>
              <div 
              key={item.id} className="text-center">
                <h1>{item.titulo}</h1>
                <img src={item.imagen1} />
                  <p style={{width:'700px',margin:'0 auto'}}>{item.descripcion}</p>
                
                  <p>Precio: ${item.precio}</p>
                  
        {<Button className='btn btn-info' 
        onClick={e => 
          setProducts(current => [...current,
            {
              id:item.id,
              name:item.titulo,
              price:Number(item.precio),
              qty:1
            }
          ])
        }>Añadir 🛒</Button>}
              </div>
            )


    }

    </>
  )
}
