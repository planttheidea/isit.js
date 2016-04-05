// not version of infinite.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitInfinite from "./infinite";

export default function isitNotInfinite() {
    return not(isitInfinite).apply(null, arraySlice.call(arguments));
}