// any version of future.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitFuture from "./future";

export default function isitAnyFuture() {
    return any(isitFuture).apply(null, arraySlice.call(arguments));
}