var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/krakotte', function(req, res, next) {
    console.log('dans krakotte.js');
  res.send('respond with a resource');
});

module.exports = router;
