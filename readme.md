# string-length

> Get the real length of a string - by correctly counting astral symbols and ignoring [ansi escape codes](https://github.com/sindresorhus/strip-ansi)

`String#length` erroneously counts [astral symbols](https://web.archive.org/web/20150721114550/http://www.tlg.uci.edu/~opoudjis/unicode/unicode_astral.html) as two characters.

## Install

```sh
npm install string-length
```

## Usage

```js
import stringLength from 'string-length';

'🐴'.length;
//=> 2

stringLength('🐴');
//=> 1

stringLength('\u001B[1municorn\u001B[22m');
//=> 7
```

## API

### stringLength(string, options?)

#### options

Type: `object`

##### countAnsiEscapeCodes

Type: `boolean`\
Default: `false`

Whether [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code) should be counted. They are ignored by default.

## Related

- [string-length-cli](https://github.com/LitoMore/string-length-cli) - CLI for this module
- [string-width](https://github.com/sindresorhus/string-width) - Get visual width of a string
