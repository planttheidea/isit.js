// all version of isoDateString.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitISODateString from "./isoDateString";

export default function isitAllISODateString() {
    return all(isitISODateString).apply(null, arraySlice.call(arguments));
}