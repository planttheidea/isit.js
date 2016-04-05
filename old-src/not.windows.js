// not version of windows.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitWindows from "./windows";

export default function isitNotWindows() {
    return not(isitWindows).apply(null, arraySlice.call(arguments));
}