'use strict';
var assert = require('assert');
var stringLength = require('./');

it('should get the real length of a string', function () {
	assert.strictEqual(stringLength('𠀔'), 1);
	assert.strictEqual(stringLength('foo𠁐bar𠀃'), 8);
	assert.strictEqual(stringLength('あ'), 1);
	assert.strictEqual(stringLength('谢'), 1);
	assert.strictEqual(stringLength('🐴'), 1);
	assert.strictEqual(stringLength('𝌆'), 1);
	assert.strictEqual(stringLength('\u001b[1mfoo\u001b[22m'), 3);
});
