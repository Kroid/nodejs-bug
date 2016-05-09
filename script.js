var util = require('util');
var fs = require('fs');

var path = './data/words';
var content = fs.readFileSync(path, {encoding: 'utf8'});
var words = content.split('\n').map(function(w) { return w; });

words.filter(function(word) {
  var q = word;
  console.log(util.format('%s : %s', q, word));
});
