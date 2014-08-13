'use strict';
var assert = require('assert');
var stringLength = require('./');

it('should get the real length of a string', function () {
	assert.strictEqual(stringLength('𠀔'), 1);
	assert.strictEqual(stringLength('foo𠁐bar𠀃'), 8);
	assert.strictEqual(stringLength('\x1b[1mfoo\x1b[22m'), 3);
});
