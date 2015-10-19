// all version of future.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitFuture from "./future";

export default function isitAllFuture() {
    return all(isitFuture).apply(null, arraySlice.call(arguments));
}