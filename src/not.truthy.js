// not version of truthy.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitTruthy from "./truthy";

export default function isitNotTruthy() {
    return not(isitTruthy).apply(null, arraySlice.call(arguments));
}