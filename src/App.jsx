import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import ListEmpleados from './components/ListEmpleados/ListEmpleados';

function App() {
  return (
    <>
      <Container className="paginaPrincipal my-5">
        <ListEmpleados />
      </Container>
      <Footer />
    </>
  );
}

export default App;
