

import {affirmative} from "regexps";

export default function _isAffirmative(obj) {
    return affirmative.test(obj);
}