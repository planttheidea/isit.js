// not version of lowercase.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitLowercase from "./lowercase";

export default function isitNotLowercase() {
    return not(isitLowercase).apply(null, arraySlice.call(arguments));
}