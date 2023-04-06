import { Fragment } from "react"
import { Col, Container, Row } from "react-bootstrap"
import FormUser from "../components/FormUser"
import Card from 'react-bootstrap/Card';


const Perfil = () => {
  return (
    <Fragment>
      <Container fluid className="mt-4 d-flex justify-content-center align-items-center">
        <Row className="w-100">
          <Col xs={10} md={8} lg={10} className="mx-auto">
            <Card className="text-center sombra">
                <Card.Body>
                    <FormUser />
                </Card.Body>
              
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default Perfil;