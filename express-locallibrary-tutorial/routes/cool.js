var express = require('express');
var router = express.Router();

/* GET cool listing. */
router.get('/cool', function(req, res, next) {
  res.render('cool', { title: "You're so cool"} );
});
