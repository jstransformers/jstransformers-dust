'use strict'

const dust = require('dustjs-linkedin')

exports.name = 'dust'
exports.outputFormat = 'html'

exports.renderAsync = function (str, options, locals) {
  return new Promise((resolve, reject) => {
    dust.renderSource(str, locals, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}
