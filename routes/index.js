var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res, next){
    res.sendFile(path.resolve(__dirname, '../views/index.html'));
});

console.log("index.js is loaded");
module.exports = router;