require('dotenv').config();

module.exports = {
    database: {
        NAME: process.env.DB_NAME,
        PASSWORD: process.env.DB_PASSWORD,
        USER: process.env.DB_USER
    }
}