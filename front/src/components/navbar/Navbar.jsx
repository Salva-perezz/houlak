import { Navbar, Container, Form, FormControl, Button } from 'react-bootstrap'
import logo from './logo.png'

const NavbarComponent = () => {
  
  return(
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Spotify
      </Navbar.Brand>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Kanye West"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Buscar</Button>
      </Form>
    </Container>
  </Navbar>);
};

export default NavbarComponent;