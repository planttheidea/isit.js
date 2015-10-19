// all version of today.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitToday from "./today";

export default function isitAllToday() {
    return all(isitToday).apply(null, arraySlice.call(arguments));
}