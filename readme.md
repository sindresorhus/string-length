# string-length [![Build Status](https://travis-ci.org/sindresorhus/string-length.svg?branch=master)](https://travis-ci.org/sindresorhus/string-length)

> Get the real length of a string - by correctly counting astral symbols and optionally ignoring [ansi escape codes](https://github.com/sindresorhus/strip-ansi)

`String#length` erroneously counts [astral symbols](https://web.archive.org/web/20150721114550/http://www.tlg.uci.edu/~opoudjis/unicode/unicode_astral.html) as two characters.

## Install

```
$ npm install string-length
```

## Usage

```js
const stringLength = require('string-length');

'🐴'.length;
//=> 2

stringLength('🐴');
//=> 1

stringLength('\u001B[1municorn\u001B[22m');
//=> 7

stringLength('\u001B[1municorn\u001B[22m', { countEscapeCodes: true });
//=> 16
```

You should only ignore escape codes when working with terminal-related strings; otherwise, you should enable `countEscapeCodes` (which defaults to `false`). This default will change in a future breaking release.

## API

### stringLength(string, options?)

#### string

Type: `string`

The string to count the length of.

#### options

Type: `object`

##### countEscapeCodes

Type: `boolean`\
Default: `false`

Whether to include ANSI escape codes in the character count, or skip them.

## Related

- [string-length-cli](https://github.com/LitoMore/string-length-cli) - CLI for this module
- [string-width](https://github.com/sindresorhus/string-width) - Get visual width of a string

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-string-length?utm_source=npm-string-length&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
