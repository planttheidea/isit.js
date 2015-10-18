

import {whitespace} from "regexps";

export default function _isWhitespace(obj) {
    return whitespace.test(obj);
}