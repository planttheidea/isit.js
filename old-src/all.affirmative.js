// all version of affirmative.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitAffirmative from "./affirmative";

export default function isitAllAffirmative() {
    return all(isitAffirmative).apply(null, arraySlice.call(arguments));
}