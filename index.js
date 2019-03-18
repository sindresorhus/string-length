'use strict';
const stripAnsi = require('strip-ansi');
const astralRegex = require('astral-regex');

const stringLength = string => stripAnsi(string).replace(astralRegex(), ' ').length;

module.exports = stringLength;
module.exports.default = stringLength;
