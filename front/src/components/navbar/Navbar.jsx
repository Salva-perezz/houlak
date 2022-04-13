import { Navbar, Container, Form, FormControl, Button } from 'react-bootstrap'
import logo from './logo.png'
import { useState } from 'react';
import axios from '../../axios';
import { useDispatch } from "react-redux";
import { setArtistAndAlbums } from '../../store/artistAndAlbums';
import { setLoading } from '../../store/loading';

const NavbarComponent = () => {
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(setLoading(true));
    const { data } = await axios.get(`/artist?artistName=${searchInput}`);
    dispatch(setArtistAndAlbums(data.body));
    dispatch(setLoading(false));
    setIsLoading(false);
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
        <Button variant="outline-success" type='submit' disabled={isLoading}>Buscar</Button>
      </Form>
    </Container>
  </Navbar>);
};

export default NavbarComponent;