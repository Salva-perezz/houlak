import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import './home.css';

const AlbumsCard = ({ album }) => (
  <Card className="albumCardContainer">
    <Card.Img variant="top" src={album.picture} />
    <Card.Body>
      <Card.Title className="textWhite">{album.name}</Card.Title>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem className="albumListItem">Canciones: {album.total_tracks}</ListGroupItem>
      <ListGroupItem className="albumListItem">Fecha de lanzamiento: {album.release_date}</ListGroupItem>
    </ListGroup>
    <Card.Body>
      <Card.Link className="albumLink" href={album.url} target='_blank'>Ver album</Card.Link>
    </Card.Body>
  </Card>
);
export default AlbumsCard;
