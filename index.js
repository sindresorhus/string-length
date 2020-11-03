'use strict';
const stripAnsi = require('strip-ansi');
const charRegex = require('char-regex');

const stringLength = (string, {countEscapeCodes = false} = {}) => {
	if (string === '') {
		return 0;
	}

	// NOTE: Flip the default here, on the next major release
	const strippedString = (countEscapeCodes === true) ?
		string :
		stripAnsi(string);

	return strippedString.match(charRegex()).length;
};

module.exports = stringLength;
