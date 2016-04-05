// not version of symbol.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitSymbol from "./symbol";

export default function isitNotSymbol() {
    return not(isitSymbol).apply(null, arraySlice.call(arguments));
}