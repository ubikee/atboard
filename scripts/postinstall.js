echo "add bower dependencies"

var copy = require('copy-files');

copy({
    files: {
        'Chart.js': './node_modules/chart.js/Chart.js'
        , 'linq.js': './node_modules/linq/linq.js'
        , 'moment.js': './node_modules/moment/moment.js'
    }
    , dest: '../../assets/javascripts'
, }, function (err) {});