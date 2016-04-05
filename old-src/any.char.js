// any version of char.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitChar from "./char";

export default function isitAnyChar() {
    return any(isitChar).apply(null, arraySlice.call(arguments));
}