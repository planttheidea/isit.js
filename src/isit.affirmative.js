

import {affirmative} from "regexps";

export default function isAffirmative(obj) {
    return affirmative.test(obj);
}