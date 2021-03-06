var path = require('path');

var config = {
  clean: [
    './instrument',
    './coverage',
    './test/spec.*'
  ],
  spec: {
    main: './test/spec/index.js',
    paths: ['./lib', './test/fixture', './node_modules/air/lib/air'],
    map: './',
    dest: './test',
    source: 'spec.js'
  },
  cover: {
    file: './coverage/coverage.json',
    main: './test/spec/index.js',
    paths: ['./instrument', './test/fixture', './node_modules/air/lib/air'],
    map: './',
    dest: './test',
    source: 'spec.js'
  },
  lint: {
    src: ['./lib/**/*.js'],
    rules: {},
    envs: ['browser', 'node']
  }
}

try {
  config.lint.rules = require(path.join(process.env.HOME, '.salint.js'));
}catch(e){}

module.exports = config;
