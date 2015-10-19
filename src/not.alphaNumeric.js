// not version of alphaNumeric.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitAlphaNumeric from "./alphaNumeric";

export default function isitNotAlphaNumeric() {
    return not(isitAlphaNumeric).apply(null, arraySlice.call(arguments));
}