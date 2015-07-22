'use strict';

var dust = require('dustjs-linkedin');
var Promise = require('promise');

exports.name = 'dust';
exports.outputFormat = 'html';

exports.renderAsync = function(str, options, locals) {
  return new Promise(function(fulfill, reject) {
    dust.renderSource(str, locals, function(err, res) {
      if (err) {
        reject(err);
      }
      else {
        fulfill(res);
      }
    });
  });
};
