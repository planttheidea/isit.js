// any version of integer.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitInteger from "./integer";

export default function isitAnyInteger() {
    return any(isitInteger).apply(null, arraySlice.call(arguments));
}