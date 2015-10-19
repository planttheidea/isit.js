// all version of alphanumeric.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitAlphaNumeric from "./alphaNumeric";

export default function isitAllAlphaNumeric() {
    return all(isitAlphaNumeric).apply(null, arraySlice.call(arguments));
}