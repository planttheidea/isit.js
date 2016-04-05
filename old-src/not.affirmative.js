// not version of affirmative.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitAffirmative from "./affirmative";

export default function isitNotAffirmative() {
    return not(isitAffirmative).apply(null, arraySlice.call(arguments));
}