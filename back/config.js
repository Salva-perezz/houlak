require('dotenv').config();

module.exports = {
    database: {
        NAME: process.env.DB_NAME,
        PASSWORD: process.env.DB_PASSWORD,
        USER: process.env.DB_USER
    },
    api: {
        PORT: process.env.PORT || 3001
    },
    spotify: {
        CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
        CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
        REDIRECT_URI: process.env.SPOTIFY_REDIRECT_URI
    }
}