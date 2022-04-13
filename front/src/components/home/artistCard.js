import React from "react";
import { Button, Card } from "react-bootstrap";

const ArtistCard = ({ artist }) => {
  return (
    <Card style={{ width: "100%", backgroundColor: '#28242c' }}>
        {console.log(artist)}
      <Card.Img height="600vh" variant="top" src={artist.image} />
      <Card.Body>
        <Card.Title style={{color: 'white' }}>{artist.name}</Card.Title>
        <Card.Text style={{color: 'white'}}>
          Generos: {artist.genres.join(', ')}
        </Card.Text>
        <Button variant="outline-success">Ver artista</Button>
      </Card.Body>
    </Card>
  );
};

export default ArtistCard;
