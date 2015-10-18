

import {affirmative} from "./regexps";

export default function isitAffirmative(obj) {
    return affirmative.test(obj);
}