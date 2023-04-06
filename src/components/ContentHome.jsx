import {React,useState,useEffect} from 'react'
import CardPlantas from './CardPlantas'
export default function ContentHome() {
  const [db, setDb] = useState([]);
  
  useEffect(() => {
    GetallPizzas();
  }, []);
  
  const GetallPizzas = async () => {
    try{
      const data = await fetch("https://ecommerce.juanpenailillo.repl.co/productos/")
      const pizzas = await data.json()
      setDb(pizzas)  
    } catch (error) {
      alert("Algo salió mal ...");
      console.log(error);
    }
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