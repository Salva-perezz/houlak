var SpotifyWebApi = require('spotify-web-api-node');
const { CLIENT_ID, CLIENT_SECRET } = require('../config').spotify;

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
});

module.exports = spotifyApi;