var path = require('path');
var ncp = require('ncp').ncp;

var source1 = path.join(__dirname, '../templates');
var destin1 = path.join(__dirname, '../../../templates');
ncp(source1, destin1, function (err) {
    console.log(err);
});

var source2 = path.join(__dirname, '../assets');
var destin2 = path.join(__dirname, '../../../assets/');
ncp(source2, destin2, function (err) {
    console.log(err);
});