# jstransformer-dust

[Dust.js](https://github.com/linkedin/dustjs) support for [JSTransformers](http://github.com/jstransformers/jstransformer).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-dust/master.svg)](https://travis-ci.org/jstransformers/jstransformer-dust)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-dust.svg)](https://david-dm.org/jstransformers/jstransformer-dust)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-dust/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-dust?branch=master)
[![NPM version](https://img.shields.io/npm/v/jstransformer-dust.svg)](https://www.npmjs.org/package/jstransformer-dust)

## Installation

    npm install jstransformer-dust

## API

```js
var foo = require('jstransformer')(require('jstransformer-foo'))

var locals = {
  features: [
    {name: "async"},
    {name: "helpers"},
    {name: "filters"},
    {name: "a little bit of logic"},
    {name: "and more"}
  ]
};
foo.renderAsync('Dust does {#features}{name}{@sep}, {/sep}{/features}!', {}, locals).body
//=> 'Dust does async, helpers, filters, a little bit of logic, and more!'
```

## License

MIT