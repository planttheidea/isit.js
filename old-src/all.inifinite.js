// all version of infinite.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitInfinite from "./infinite";

export default function isitAllInfinite() {
    return all(isitInfinite).apply(null, arraySlice.call(arguments));
}