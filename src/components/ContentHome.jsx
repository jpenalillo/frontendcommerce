import {React,useState,useEffect} from 'react'
import CardPlantas from './CardPlantas'
export default function ContentHome() {
  const [db, setDb] = useState([]);
  
  useEffect(() => {
    GetallPizzas();
  }, []);
  
  const GetallPizzas = async () => {
    const data = await fetch("https://ecommerce.juanpenailillo.repl.co/productos/")
    const pizzas = await data.json()
    setDb(pizzas)
  };
  return (
    <div className='contenedorCard'>
       {db.map(item =>
         <li key="{item.id}">
            <CardPlantas 
              item={item}
                  />

         </li>

       )}
    
    </div>
  )
}