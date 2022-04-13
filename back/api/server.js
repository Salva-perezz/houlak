const express = require('express');
const app = express();
const db = require('../dbConnection');
const { requestLogger } = require('./middlewares'); 
const components = require('./components');
const { PORT } = require('../config').api;
const getSpotifyAuthToken = require('./spotifyAuth/spotifyAuth');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(requestLogger);
app.use('/', components)

getSpotifyAuthToken();
db.sync().then(() => {
    console.log('Database synchronized succesfully!');
    app.listen(PORT, () => {
        console.log(`App listening port ${PORT}`);
    });
}).catch(err => {
    console.log('An error happen synchronizing the database: ', err);
});