var express = require('express');
var router = express.Router();

var path = require('path');

var prueba = require('../modules/conexion').prueba;

router.get('/', function(req, res, ext){
    prueba(req, res);
})

module.exports = router;