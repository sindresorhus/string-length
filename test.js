const test = require('ava');
const stringLength = require('.');

test('get the real length of a string', t => {
	t.is(stringLength(''), 0);
	t.is(stringLength('𠀔'), 1);
	t.is(stringLength('foo𠁐bar𠀃'), 8);
	t.is(stringLength('あ'), 1);
	t.is(stringLength('谢'), 1);
	t.is(stringLength('🐴'), 1);
	t.is(stringLength('𝌆'), 1);
	t.is(stringLength('\u001B[1mfoo\u001B[22m'), 3);
	t.is(stringLength('❤️'), 1);
	t.is(stringLength('👊🏽'), 1);
	t.is(stringLength('🏴󠁧󠁢󠁥󠁮󠁧󠁿❤️谢👪'), 4);
	t.is(stringLength('\u001B[1m👩‍👧‍👦°✿\u001B[22m'), 3);
});

test('respect the countEscapeCodes option and defaults', t => {
	t.is(stringLength('\u001B[1mtest'), 4);
	t.is(stringLength('\u001B[1mtest', {countEscapeCodes: false}), 4);
	t.is(stringLength('\u001B[1mtest', {countEscapeCodes: true}), 8);
});
