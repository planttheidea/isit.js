// all version of string.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitString from "./string";

export default function isitAllString() {
    return all(isitString).apply(null, arraySlice.call(arguments));
}