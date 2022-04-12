const app = require('express')();
const db = require('../dbConnection');


db.sync().then(() => {
    console.log('Database synchronized succesfully!');
    app.listen(3001, () => {
        console.log('App listening port 3001');
    });
}).catch(err => {
    console.log('An error happen synchronizing the database: ', err);
});