// any version of symbol.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitSymbol from "./symbol";

export default function isitAnySymbol() {
    return any(isitSymbol).apply(null, arraySlice.call(arguments));
}