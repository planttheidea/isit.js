/* eslint-disable max-len */
export const DATA_URL_REGEXP = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;
/* eslint-enable */
export const DOUBLE_BYTE_REGEXP = /[^\u0000-\u00ff]/;
export const HTML_REGEXP = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/;
export const SPLIT_WORDS_REGEXP = /[_|\-|\s\s*]/;
export const WHITESPACE_REGEXP = /^\s\s*/;
