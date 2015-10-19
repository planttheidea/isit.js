// all version of truthy.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitTruthy from "./truthy";

export default function isitAllTruthy() {
    return all(isitTruthy).apply(null, arraySlice.call(arguments));
}