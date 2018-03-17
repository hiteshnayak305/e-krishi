var express = require('express');
var router = express.Router();

var product = require('../models/product');

router.get('/products', function(req, res, next) {
    product.find((err, result )=>{
        if(err) {
            console.log(err);
            res.status(400);
        }
        console.log(result);
        res.header('Access-Control-Allow-Origin', '*');
    	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        res.json(result);
    });
});

module.exports = router;
