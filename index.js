import {stripVTControlCharacters} from 'node:util';

const segmenter = new Intl.Segmenter();

export default function stringLength(string, {countAnsiEscapeCodes = false} = {}) {
	if (string === '') {
		return 0;
	}

	if (!countAnsiEscapeCodes) {
		string = stripVTControlCharacters(string);

		if (string === '') {
			return 0;
		}
	}

	let length = 0;

	for (const _ of segmenter.segment(string)) { // eslint-disable-line no-unused-vars
		length++;
	}

	return length;
}
