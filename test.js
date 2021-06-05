import test from 'ava';
import stringLength from './index.js';

test('get the real length of a string', t => {
	t.is(stringLength(''), 0);
	t.is(stringLength('\u001B[1m\u001B[22m'), 0);
	t.is(stringLength('\u001B[1m\u001B[22m', {countAnsiEscapeCodes: true}), 9);
	t.is(stringLength('𠀔'), 1);
	t.is(stringLength('foo𠁐bar𠀃'), 8);
	t.is(stringLength('あ'), 1);
	t.is(stringLength('谢'), 1);
	t.is(stringLength('🐴'), 1);
	t.is(stringLength('𝌆'), 1);
	t.is(stringLength('\u001B[1mfoo\u001B[22m'), 3);
	t.is(stringLength('\u001B[1mfoo\u001B[22m', {countAnsiEscapeCodes: true}), 12);
	t.is(stringLength('❤️'), 1);
	t.is(stringLength('👊🏽'), 1);
	t.is(stringLength('🏴󠁧󠁢󠁥󠁮󠁧󠁿❤️谢👪'), 4);
	t.is(stringLength('\u001B[1m👩‍👧‍👦°✿\u001B[22m'), 3);
	t.is(stringLength('\u001B[1m👩‍👧‍👦°✿\u001B[22m', {countAnsiEscapeCodes: true}), 12);
});
