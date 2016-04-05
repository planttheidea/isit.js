// not version of isoDateString.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitISODateString from "./isoDateString";

export default function isitNotISODateString() {
    return not(isitISODateString).apply(null, arraySlice.call(arguments));
}