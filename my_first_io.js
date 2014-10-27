var fs = require('fs');

var data = fs.readFileSync('./newline.txt', 'utf8');

var split = data.split('\n');

var count = split.length

console.log(count);