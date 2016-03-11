var copy = require('copy-files');
var path = require('path');
var ncp = require('ncp').ncp;

var source1 = path.join(_dirname, './templates');
var destin1 = path.join(_dirname, '../../templates');
ncp(source1, destin1, function (err) {
    console.log(err);
});

var source2 = path.join(_dirname, './assets/bower_components');
var destin2 = path.join(_dirname, '../../assets/bower_components');
ncp(source2, destin2, function (err) {
    console.log(err);
});