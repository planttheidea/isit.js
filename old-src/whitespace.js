// is obj only whitespace?

import {whitespace} from "./_regexps";

export default function isitWhitespace(obj) {
    return whitespace.test(obj);
}