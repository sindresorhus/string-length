// eslint-disable-next-line n/prefer-global/process
const {stripVTControlCharacters} = globalThis.process?.getBuiltinModule?.('node:util') ?? {};

const segmenter = new Intl.Segmenter();

export default function stringLength(string, {countAnsiEscapeCodes = false} = {}) {
	if (string === '') {
		return 0;
	}

	if (!countAnsiEscapeCodes && stripVTControlCharacters) {
		string = stripVTControlCharacters(string);

		if (string === '') {
			return 0;
		}
	}

	let length = 0;

	for (const _ of segmenter.segment(string)) {
		length++;
	}

	return length;
}
