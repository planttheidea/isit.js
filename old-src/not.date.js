// not version of date.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitDate from "./date";

export default function isitNotDate() {
    return not(isitDate).apply(null, arraySlice.call(arguments));
}