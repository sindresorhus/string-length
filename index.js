'use strict';
var reAstral = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;

module.exports = function (str) {
	return str.replace(reAstral, ' ').length;
};
