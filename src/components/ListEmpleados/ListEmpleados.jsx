import { Card, Row, Col } from 'react-bootstrap';
import './list-empleados.css';

const ListEmpleados = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="mb-3 text-uppercase display-6 fw-bold">
          Lista de Empleados
        </Card.Title>
        <Row className="my-4">
          <Col md={6} lg={4} className="mb-3">
            <Card className="d-flex flex-row justify-content-beetween align-items-center p-2">
              <div>
                <img
                  className="colorBox w-100"
                  src="/src/assets/img/empleado01.png"
                  width={100}
                  alt="empleado01"
                />
              </div>
              <Card.Body>
                <Card.Title className="fw-bold text-uppercase line-clamp">
                  Nombre Empleado
                </Card.Title>
                <Card.Text>
                  Titulo{' '}
                  <span className="badge text-bg-primary">Departamento</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-3">
            <Card className="d-flex flex-row justify-content-beetween align-items-center p-2">
              <div>
                <img
                  className="colorBox w-100"
                  src="/src/assets/img/empleado02.png"
                  width={100}
                  alt="empleado02"
                />
              </div>
              <Card.Body>
                <Card.Title className="fw-bold text-uppercase line-clamp">
                  Nombre Empleado 2
                </Card.Title>
                <Card.Text>
                  Titulo{' '}
                  <span className="badge text-bg-primary">Departamento</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-3">
            <Card className="d-flex flex-row justify-content-beetween align-items-center p-2">
              <div>
                <img
                  className="colorBox w-100"
                  src="/src/assets/img/empleado03.png"
                  width={100}
                  alt="empleado03"
                />
              </div>
              <Card.Body>
                <Card.Title className="fw-bold text-uppercase line-clamp">
                  Nombre Empleado 3
                </Card.Title>
                <Card.Text>
                  Titulo{' '}
                  <span className="badge text-bg-primary">Departamento</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ListEmpleados;
