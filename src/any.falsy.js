// any version of falsy.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitFalsy from "./falsy";

export default function isitAnyFalsy() {
    return any(isitFalsy).apply(null, arraySlice.call(arguments));
}