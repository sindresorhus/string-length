/**
Get the real length of a string - by correctly counting astral symbols and ignoring [ansi escape codes](https://github.com/sindresorhus/strip-ansi).

`String#length` errornously counts [astral symbols](https://web.archive.org/web/20150721114550/http://www.tlg.uci.edu/~opoudjis/unicode/unicode_astral.html) as two characters.
*/
export default function stringLength(input: string): number;
