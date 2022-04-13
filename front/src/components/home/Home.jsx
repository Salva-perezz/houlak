import { useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import ArtistCard from "./artistCard";
import AlbumsCard from "./albumsCard";
import "./home.css";

const Home = () => {
  const artistAndAlbums = useSelector((state) => state.artistAndAlbums);
  const loading = useSelector((state) => state.loading);
  const responseError = useSelector((state) => state.responseError);

  return (
    <>
      {loading ? (
        <div className="loadingContainer">
          <Spinner animation="border" variant="success" />
        </div>
      ) : responseError ? (
        <h1 className="h1Home">{responseError}</h1>
      ) : artistAndAlbums ? (
        <div className="artistAndAlbumsContainer">
          <div className="artistAndAlbumsSubContainer">
            <ArtistCard artist={artistAndAlbums.artist} />
            {artistAndAlbums.albums.map((album) => (
              <AlbumsCard album={album} />
            ))}
          </div>
        </div>
      ) : (
        <h1 className="h1Home">
          Ingrese el nombre de un artista en el buscador
        </h1>
      )}
    </>
  );
};

export default Home;
