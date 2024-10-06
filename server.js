//Import Express
const express = require('express');
//Import Mongodb
const mongodb = require('./data/database');
const app = express();

//port configuration
const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    }
    else{
        app.listen(port, () => {
            console.log(`server runing at port ${port}`);
        });
    }
});

