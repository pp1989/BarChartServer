var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/chartshow', require('../api/chart').ShowChart);

module.exports = router;
