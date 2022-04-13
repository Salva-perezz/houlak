import React from "react";
import { Button, Card } from "react-bootstrap";
import './home.css';

const ArtistCard = ({ artist }) => {
  return (
    <Card className="artistCardContainer">
      <Card.Img height="600vh" variant="top" src={artist.image} />
      <Card.Body>
        <Card.Title className="textWhite">{artist.name}</Card.Title>
        <Card.Text className="textWhite">
          Generos: {artist.genres.join(', ')}
        </Card.Text>
        <Button href={artist.url} target='_blank' variant="outline-success">Ver artista</Button>
      </Card.Body>
    </Card>
  );
};

export default ArtistCard;
