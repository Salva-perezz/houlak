import { useEffect } from "react";
import { useSelector } from "react-redux";
import Spinner from 'react-bootstrap/Spinner' 
import ArtistCard from "./artistCard";
import { useState } from "react";

 const Home = () => {
    const artistAndAlbums = useSelector(state => state.artistAndAlbums);
    const loading = useSelector(state => state.loading);
    
    useEffect(() => {
      console.log(artistAndAlbums);
    }, [artistAndAlbums])
    
    return (
        <>
        {loading ? (
          <div style={{width: '100%', textAlign: 'center', marginTop: '30vh'}}>
            <Spinner animation="border" variant="success" />
          </div>
        ) : !artistAndAlbums ? (<h1 style={{color: 'white', marginTop: '3em', textAlign: 'center', fontSize: '5vh'}}>Ingresa el nombre de un artista en el buscador</h1>) : (
          <div style={{width: '100%', marginTop: '5em'}}>
            <div style={{margin: 'auto', width: '50%'}}>
              <ArtistCard artist={artistAndAlbums.artist} />
            </div>
          </div>
        )
        }
        </>
    );
};

export default Home;