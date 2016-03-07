var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
    res.render('index', {title: 'All Messages'});
});

module.exports = router;