// any version of truthy.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitTruthy from "./truthy";

export default function isitAnyTruthy() {
    return any(isitTruthy).apply(null, arraySlice.call(arguments));
}