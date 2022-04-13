const artistConstructor = (artist) => {
    const artistObject = {};

    artistObject.name = artist.name;
    artistObject.id = artist.id;
    artistObject.url = artist.external_urls.spotify;
    artistObject.followers = artist.followers.total;
    artistObject.image = artist.images[0].url;
    artistObject.genres = artist.genres;

    return artistObject;
};

const albumsConstructor = (albumsArray) => {
    const refinedAlbumsArray = [];

    albumsArray.forEach(album => {
        const albumObject = {};
        albumObject.name = album.name;
        albumObject.release_date = album.release_date;
        albumObject.picture = album.images[0].url;
        albumObject.total_tracks = album.total_tracks;
        albumObject.url = album.external_urls.spotify;

        refinedAlbumsArray.push(albumObject);
    });

    return refinedAlbumsArray;
};

module.exports = { artistConstructor, albumsConstructor }