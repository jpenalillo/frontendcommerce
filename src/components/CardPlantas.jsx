import {React,useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import CartContext from '../contexts/CartContext';
import ProductContext from '../contexts/ProductContext';



export default function CardPizza(props) {
  const { data, setData } = useContext(CartContext)
  const {product,setProducts} = useContext(ProductContext)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.item.imagen1} />
      <Card.Body>
        <Card.Title>{props.item.titulo}</Card.Title>
        <Card.Text>
          <b>Ingredientes:</b>
          <ul>
          {props.item.descripcion}
          </ul>
        </Card.Text>
        
      <ListGroup className="list-group-flush">
        <ListGroup.Item></ListGroup.Item>
        <ListGroup.Item>Precio: ${props.item.precio}</ListGroup.Item>
      </ListGroup>
      <Link to={`/Plantas/${props.item.id}`}>
        <Button className="btn btn-warning">Ver Más</Button>
      </Link>
        {<Button className='btn btn-info' 
        onClick={e => 
          setProducts(current => [...current,
            {
              id:props.item.id,
              name:props.item.titulo,
              price:Number(props.item.precio),
              qty:1
            }
          ])
        }>Añadir</Button>}
      </Card.Body>
    </Card>
  )
}
