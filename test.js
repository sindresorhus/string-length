'use strict';
var assert = require('assert');
var stringLength = require('./index');

it('should get the real length of a string', function () {
	assert.strictEqual(stringLength('𠀔'), 1);
	assert.strictEqual(stringLength('foo𠁐bar𠀃'), 8);
});
