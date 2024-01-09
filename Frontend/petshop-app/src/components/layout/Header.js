import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar className="minhaNavbar" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">LiteraHub</Navbar.Brand>
                <Nav className="me-auto"></Nav>
        <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/book/list">Livros</Nav.Link>
            <Nav.Link className="link" href="/book/info">Sobre</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;