const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//MySQL
const mysql = require('mysql');

const PORT = process.env.PORT || 5000;
const app = express();

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


/*
Anything inside the directory you designate as static 
content is made available directly from the base URL. You need to request 
http://localhost:1337/serveme.txt instead.

If you want to only serve static files from /public you can pass a string as the first argument:
application.use("/public", express.static(path.join(__dirname, 'public')));
*/

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//app.get('/', (req, res) => res.render('pages/index'));
app.get('/', (req, res) => res.render('pages/index.html'));
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));