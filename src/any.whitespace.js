// any version of whitespace.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitWhitespace from "./whitespace";

export default function isitAnyWhitespace() {
    return any(isitWhitespace).apply(null, arraySlice.call(arguments));
}