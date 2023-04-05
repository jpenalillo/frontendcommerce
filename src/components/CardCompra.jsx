import {React} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';



export default function CardCompra(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.item.imagen1} />
      <Card.Body>
        <Card.Title>Número orden: {props.item.id}</Card.Title>
      <ListGroup className="list-group-flush">
        <Card.Title>{props.item.titulo}</Card.Title>
        <ListGroup.Item>Precio: ${props.item.precio}</ListGroup.Item>
      </ListGroup>
      </Card.Body>
    </Card>
  )
}
