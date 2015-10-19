// not version of day.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitDay from "./day";

export default function isitNotDay() {
    return not(isitDay).apply(null, arraySlice.call(arguments));
}