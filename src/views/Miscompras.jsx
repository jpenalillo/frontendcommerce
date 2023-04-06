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
      try{  
        const endpoint = "https://ecommerceplants.fly.dev/compras/";
        const data = await fetch(endpoint, {
                            method: 'GET',
                            headers: {
                              'Authorization': 'Bearer ' + token
                              }
                            });
          const plantas = await data.json()
          setDb(plantas)
      } catch (error) {
        alert("Algo salió mal ...");
        console.log(error);
      }
    };
    return (
        <>
        <NavBarPizza />
        <h1>Mis compras</h1>
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
