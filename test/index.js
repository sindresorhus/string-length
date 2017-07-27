import test from 'ava';
import m from '..';

test('get the real length of a string', t => {
	t.is(m('𠀔'), 1);
	t.is(m('foo𠁐bar𠀃'), 8);
	t.is(m('あ'), 1);
	t.is(m('谢'), 1);
	t.is(m('🐴'), 1);
	t.is(m('𝌆'), 1);
	t.is(m('\u001B[1mfoo\u001B[22m'), 3);
});
