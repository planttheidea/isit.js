// not version of timeString.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitTimeString from "./timeString";

export default function isitNotTimeString() {
    return not(isitTimeString).apply(null, arraySlice.call(arguments));
}