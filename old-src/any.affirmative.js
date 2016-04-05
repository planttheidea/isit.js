// any version of affirmative.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitAffirmative from "./affirmative";

export default function isitAnyAffirmative() {
    return any(isitAffirmative).apply(null, arraySlice.call(arguments));
}