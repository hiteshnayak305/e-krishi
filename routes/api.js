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
        
        res.json(result);
    });
});

module.exports = router;
