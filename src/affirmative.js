

import {affirmative} from "./_regexps";

export default function isitAffirmative(obj) {
    return affirmative.test(obj);
}