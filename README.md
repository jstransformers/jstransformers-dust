# jstransformer-dust

[Dust.js](http://github.com/linkedin/dustjs) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-dust/master.svg)](https://travis-ci.org/jstransformers/jstransformer-dust)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-dust/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-dust)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-dust/master.svg)](http://david-dm.org/jstransformers/jstransformer-dust)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-dust.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-dust.svg)](https://www.npmjs.org/package/jstransformer-dust)

## Installation

    npm install jstransformer-dust

## API

```js
var dust = require('jstransformer')(require('jstransformer-dust'))

var locals = {
  features: [
    {name: "async"},
    {name: "helpers"},
    {name: "filters"},
    {name: "a little bit of logic"},
    {name: "and more"}
  ]
}
dust.renderAsync('Dust does {#features}{name}{@sep}, {/sep}{/features}!', locals).then(function (result) {
  result
  //=> 'Dust does async, helpers, filters, a little bit of logic, and more!'
})
```

## License

MIT
