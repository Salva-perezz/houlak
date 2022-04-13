import { Navbar, Container, Form, FormControl, Button } from 'react-bootstrap'
import logo from './logo.png'
import { useState } from 'react';
import axios from '../../axios';

const NavbarComponent = () => {
  const [searchInput, setSearchInput] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('entre')
    const { data } = axios.get(`/artist?artistName=${searchInput}`);
    console.log(data);
  };

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
      <Form className="d-flex" onSubmit={submitHandler}>
        <FormControl
          type="search"
          placeholder="Kanye West"
          onChange={e => setSearchInput(e.target.value)}
          value={searchInput}
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success" type='submit'>Buscar</Button>
      </Form>
    </Container>
  </Navbar>);
};

export default NavbarComponent;