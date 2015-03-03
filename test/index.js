'use strict';

// Dependencies
var assert = require('assert');
var fs = require('fs');
var transform = require('../');

// Construct the test parameters
var input = '{title}<ul>{#names}<li>{name}</li>{/names}</ul>';
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
var options = {};
var expected = 'Famous People<ul><li>Larry</li><li>Curly</li><li>Moe</li></ul>';
console.log('Expect: ' + expected);

// Execute the transform
var template = transform.renderAsync(input, options, locals);
template.then(function(output) {
  console.log('Output: ' + output);
  assert.equal(output, expected, 'Expected template results do not match');
}).done();
