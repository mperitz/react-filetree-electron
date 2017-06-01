const spawn = require('cross-spawn');
const path = require('path');
const jsdom = require('jsdom').jsdom;

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
window.localStorage = window.sessionStorage = {
  getItem(key) {
    return this[key];
  },
  setItem(key, value) {
    this[key] = value;
  },
  removeItem(key) {
    this[key] = undefined;
  },
};

const s = `\\${path.sep}`;
const pattern = process.argv[2] === 'e2e'
  ? `test${s}e2e${s}.+\\.spec\\.js`
  : `test${s}(?!e2e${s})[^${s}]+${s}.+\\.spec\\.js$`;

spawn.sync(path.normalize('./node_modules/.bin/jest'), [pattern], { stdio: 'inherit' });
