var express = require('express');
var router = express.Router();

router.get('/', function(request, response) {
    db.all("SELECT * FROM tbl_articulo", function(err, rows) {
      console.log("GET request for articulos");
      response.render('articulos', {
        title: 'Articulos',
        rows: rows
        });
    });
});

/*
router.post('/crearArticulo', function(request, response){
  db.run('INSERT INTO tbl_articulo(descripcion, precio) VALUES (?,?)',
  [request.body.descripcion, request.body.precio]);
  response.redirect('/articulos');
});

router.get('/:referencia', function(request, response) {
  db.all("SELECT * FROM tbl_articulo WHERE referencia=?", [request.params.referencia],
    function(err, rows) {
      console.log("GET request for articulos with referencia: " + request.params.referencia);
      response.render('editarArticulo', {
        title: 'Articulos',
        rows: rows
      });
  });
});

router.post('/editar/:referencia', function(request, response) {
  request.checkBody('descripcion', 'La descripcion es requerida.').notEmpty();
  request.checkBody('precio', 'El precio es requerido.').notEmpty();

  request.getValidationResult().then(function(result) {
    if (result.array() != '') {
      db.all("SELECT * FROM tbl_articulo WHERE referencia=?", [request.params.referencia], function(err, rows) {
        response.render('editarArticulo', {
          title: 'Articulos',
          rows: rows,
          errors: result.array()
        });
      });
      return;
      return;
    } else {
        db.run("UPDATE tbl_articulo SET descripcion=?, precio=? WHERE referencia=?",
        [request.body.descripcion, request.body.precio, request.params.referencia]);
        response.redirect('/articulos');
    }
  });
});

router.delete('/borrar/:referencia', function(request, response){
  console.log('DELETE request para articulo: '+ request.params.referencia);
  db.run("DELETE FROM tbl_articulo WHERE referencia=?", [request.params.referencia]);
  response.redirect('/articulos');
});
*/
module.exports = router;
