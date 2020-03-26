'use strict';
const stripAnsi = require('strip-ansi');
const charRegex = require('char-regex');

const stringLength = string => stripAnsi(string).replace(charRegex(), ' ').length;

module.exports = stringLength;
