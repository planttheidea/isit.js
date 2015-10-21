// all version of symbol.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitSymbol from "./symbol";

export default function isitAllSymbol() {
    return all(isitSymbol).apply(null, arraySlice.call(arguments));
}