'use strict';
require('./index.css');
require('../module.js');
console.log('hello index');
var _mm = require('util/mm.js');

_mm.request({
    method: 'POST',
    url: 'http://medicine.w6688j.com/user/check_valid.do',
    data: {
        'str': 'admin',
        'type': 'username'
    },
    success: function (res) {
        console.log(res);
    },
    error: function (res) {
        console.log(res);
    }
});

var html = '<div>{{data}}</div>';
var data = {
    data: 'test'
};

console.log(_mm.renderHtml(html, data));