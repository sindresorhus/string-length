'use strict';
const stripAnsi = require('strip-ansi');
const charRegex = require('char-regex');

const stringLength = string => stripAnsi(string).match(charRegex()).length;

module.exports = stringLength;
