

import {whitespace} from "regexps";

export default function isWhitespace(obj) {
    return whitespace.test(obj);
}