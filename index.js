import stripAnsi from 'strip-ansi';

const segmenter = Intl.Segmenter();

export default function stringLength(string, {countAnsiEscapeCodes = false} = {}) {
	if (string === '') {
		return 0;
	}

	if (!countAnsiEscapeCodes) {
		string = stripAnsi(string);
	}

	if (string === '') {
		return 0;
	}

	let length = 0;

	for (const _ of segmenter.segment(string)) {
		length++;
	}

	return length;
}
