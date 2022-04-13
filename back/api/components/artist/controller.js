const response = require('../../../network/response');
const spotifyApi = require('../../../spotifyApi');
const { artistConstructor, albumsConstructor } = require('./helpers');

const getArtist = async (req, res) => {
    try {
        const { artistName } = req.query;
        if(!artistName) return response.error(req, res, 'No se envio ningun termino de busqueda', 400);
        
        const artistResponse = await spotifyApi.searchArtists(artistName);

        if(!artistResponse.body.artists.total) return response.error(req, res, 'Lo siento, no encontramos lo que estas buscando', 404);
    
        const albumsResponse = await spotifyApi.getArtistAlbums(artistResponse.body.artists.items[0].id);
        const artist = artistConstructor(artistResponse.body.artists.items[0]);
        const albums = albumsConstructor(albumsResponse.body.items);
        const responseObject = { artist, albums };
    
        response.succes(req, res, responseObject, 200);
    } catch(e) {
        console.log('[ERROR]', e);
        response.error(req, res, null, 500);
    }
};


module.exports = { getArtist };