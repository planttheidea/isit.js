// not version of future.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitFuture from "./future";

export default function isitNotFuture() {
    return not(isitFuture).apply(null, arraySlice.call(arguments));
}