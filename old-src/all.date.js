// all version of date.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitDate from "./date";

export default function isitAllDate() {
    return all(isitDate).apply(null, arraySlice.call(arguments));
}