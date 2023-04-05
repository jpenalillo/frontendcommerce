import {React,useState,useEffect} from 'react'
import NavBarPizza from '../components/NavBarPlantas'
import CardCompra from '../components/CardCompra'
import '../assets/css/main.css'
export default function Miscompras() { 
    const token = localStorage.getItem("token");
    const [db, setDb] = useState([]);
    useEffect(() => {
        GetallCompras();
    }, []);
    
    const GetallCompras = async () => {
        
    const endpoint = "https://ecommerce.juanpenailillo.repl.co/compras/";
    const data = await fetch(endpoint, {
                        method: 'GET',
                        headers: {
                          'Authorization': 'Bearer ' + token
                          }
                        });
      const plantas = await data.json()
      setDb(plantas)
    };
    return (
        <>
        <NavBarPizza />
      <div className='contenedorCard'>
         {db.map(item =>
           <li key="{item.id}">
              <CardCompra 
                item={item}
                    />
  
           </li>
  
         )}
      
      </div>
      </>
    )
}
