'use strict';

// Dependencies
var assert = require('assert');
var transform = require('../');
var test = require('testit');

// Construct the test parameters
var input = '{title}<ul>{#names}<li>{name}</li>{/names}</ul>';
var options = {};
var locals = {
  "title": "Famous People",
  "names" : [
    {
      "name": "Larry"
    },
    {
      "name": "Curly"
    },
    {
      "name": "Moe"
    }
  ]
};
var expected = 'Famous People<ul><li>Larry</li><li>Curly</li><li>Moe</li></ul>';

function assertEqual(output, expected) {
  console.log('   Output:\t'   + JSON.stringify(output));
  console.log('   Expected:\t' + JSON.stringify(expected));
  assert.equal(output, expected, 'Expected template results do not match');
}

test(transform.name, function (done) {
  var template = transform.renderAsync(input, options, locals);
  template.then(function(output) {
    assertEqual(output, expected);
    done();
  }, function (err) {
    done(err);
  }).done();
});
