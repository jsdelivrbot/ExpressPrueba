const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require ('http');
const app = express();

//MySQL
const mysql = require('mysql');

//API file for interacting with MySQL
const api = require('./routes/api');

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

//API location
app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.render(path.join(__dirname, 'dist/index.html'));
});


app.set('view engine', 'ejs');

//Set Port
const PORT = process.env.PORT || 5000;
app.set('port', PORT);

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Running on localhost:${PORT}`));