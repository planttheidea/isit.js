// not version of yesterday.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitYesterday from "./yesterday";

export default function isitNotYesterday() {
    return not(isitYesterday).apply(null, arraySlice.call(arguments));
}