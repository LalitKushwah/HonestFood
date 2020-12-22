const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const outletRoute = require('./route/outlet');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
// parse application/json

app.use('/api/outlet', outletRoute);


app.listen(3000, () => {
    console.log('Server has been started on: 3000');
});