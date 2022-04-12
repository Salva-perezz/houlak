const express = require('express');
const app = express();
const db = require('../dbConnection');
const { requestLogger } = require('./middlewares'); 
const components = require('./components');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(requestLogger);
app.use('/', components)

db.sync().then(() => {
    console.log('Database synchronized succesfully!');
    app.listen(3001, () => {
        console.log('App listening port 3001');
    });
}).catch(err => {
    console.log('An error happen synchronizing the database: ', err);
});