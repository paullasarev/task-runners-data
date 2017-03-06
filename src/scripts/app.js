var _ = require('lodash');
var $ = require('jquery');
var header = require('./components/header');
var content = require('./components/content');
var footer = require('./components/footer');

header.init();
menu.init();
footer.init();
content.init();

console.log(_.VERSION, $.fn.jquery);