var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://hiteshnayak305:hn4nov96@ds115749.mlab.com:15749/ekrishi');

var products = [
    new Product({
    imageURL: 'https://3.imimg.com/data3/PI/QO/GLADMIN-21651/agricultural-equipment-250x250.jpg',
    title: 'Farming Tool 1',
    description: 'a tool for making soil level and removing leaves from the ground, consisting of a long handle with sharp separated points on one end that the soil etc is caught in',
    price: 1500
}),
    new Product({
    imageURL: 'https://3.imimg.com/data3/PI/QO/GLADMIN-21651/agricultural-equipment-250x250.jpg',
    title: 'Farming Tool 2',
    description: 'a tool for making soil level and removing leaves from the ground, consisting of a long handle with sharp separated points on one end that the soil etc is caught in',
    price: 1500
}),
    new Product({
    imageURL: 'https://3.imimg.com/data3/PI/QO/GLADMIN-21651/agricultural-equipment-250x250.jpg',
    title: 'Farming Tool 3',
    description: 'a tool for making soil level and removing leaves from the ground, consisting of a long handle with sharp separated points on one end that the soil etc is caught in',
    price: 1500
}),
    new Product({
    imageURL: 'https://3.imimg.com/data3/PI/QO/GLADMIN-21651/agricultural-equipment-250x250.jpg',
    title: 'Farming Tool 4',
    description: 'a tool for making soil level and removing leaves from the ground, consisting of a long handle with sharp separated points on one end that the soil etc is caught in',
    price: 1500
}),
    new Product({
    imageURL: 'https://3.imimg.com/data3/PI/QO/GLADMIN-21651/agricultural-equipment-250x250.jpg',
    title: 'Farming Tool 5',
    description: 'a tool for making soil level and removing leaves from the ground, consisting of a long handle with sharp separated points on one end that the soil etc is caught in',
    price: 1500
}),
    new Product({
    imageURL: 'https://3.imimg.com/data3/PI/QO/GLADMIN-21651/agricultural-equipment-250x250.jpg',
    title: 'Farming Tool 6',
    description: 'a tool for making soil level and removing leaves from the ground, consisting of a long handle with sharp separated points on one end that the soil etc is caught in',
    price: 1500
})
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        if(err) {
            console.log(err);
        }
        done++;    
    });
}

if(done==products.length){
    exit();
}
