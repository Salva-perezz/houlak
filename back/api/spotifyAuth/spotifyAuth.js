/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */
const getSpotifyAuthToken = async () => {
    const spotifyApi = require('../../spotifyApi');

    var request = require('request'); // "Request" library
    const { CLIENT_ID, CLIENT_SECRET } = require('../../config').spotify;
   
    var client_id = CLIENT_ID; // Your client id
    var client_secret = CLIENT_SECRET; // Your secret
    
    // your application requests authorization
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      form: {
        grant_type: 'client_credentials'
      },
      json: true
    };
    
    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {
    
        // use the access token to access the Spotify Web API
        var token = body.access_token;
        spotifyApi.setAccessToken(token);
      }
    });
}

module.exports = getSpotifyAuthToken;