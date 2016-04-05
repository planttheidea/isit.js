// all version of yesterday.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitYesterday from "./yesterday";

export default function isitAllYesterday() {
    return all(isitYesterday).apply(null, arraySlice.call(arguments));
}