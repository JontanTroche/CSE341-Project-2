//Import Express
const express = require('express');
const app = express();

//port configuration
const port = process.env.PORT || 3000;

//test
app.get('/', (req, res) => {
    res.send('Wellcome to my To Do list API');
});

app.listen(port, () => {
    console.log(`server runing at port ${port}`);
});