import { Card, Col } from 'react-bootstrap';
import './card-empleados.css';

const CardEmpleados = ({ empleado }) => {
  return (
    <Col md={6} lg={4} className="mb-3">
      <Card className="d-flex flex-row justify-content-beetween align-items-center p-2">
        <div>
          <img
            className="colorBox w-100"
            src={'/src/assets/img/' + empleado.pic}
            width={100}
            alt={empleado.fullName}
          />
        </div>
        <Card.Body>
          <Card.Title className="fw-bold text-uppercase line-clamp">
            {empleado.fullName}
          </Card.Title>
          <Card.Text>
            {empleado.title}{' '}
            <span className="ms-2 badge text-bg-primary">
              {empleado.department}
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardEmpleados;
