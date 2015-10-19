// not version of ipad.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitIpad from "./ipad";

export default function isitNotIpad() {
    return not(isitIpad).apply(null, arraySlice.call(arguments));
}