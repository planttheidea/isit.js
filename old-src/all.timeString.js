// all version of timeString.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitTimeString from "./timeString";

export default function isitAllTimeString() {
    return all(isitTimeString).apply(null, arraySlice.call(arguments));
}