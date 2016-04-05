// all version of undefined.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitUndefined from "./undefined";

export default function isitAllUndefined() {
    return all(isitUndefined).apply(null, arraySlice.call(arguments));
}