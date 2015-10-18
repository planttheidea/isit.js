// is obj only whitespace?

import {whitespace} from "regexps";

export default function isitWhitespace(obj) {
    return whitespace.test(obj);
}