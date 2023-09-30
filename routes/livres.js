var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res, next) {
  res.render('livres', { title: req.params.id });
});

router.post('/', function(req, res, post) {
  res.render('livres', { title: req.body.nomLivre});
});

module.exports = router;
