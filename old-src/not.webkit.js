// not version of webkit.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitWebkit from "./webkit";

export default function isitNotWebkit() {
    return not(isitWebkit).apply(null, arraySlice.call(arguments));
}