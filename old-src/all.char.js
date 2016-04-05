// all version of char.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitChar from "./char";

export default function isitAllChar() {
    return all(isitChar).apply(null, arraySlice.call(arguments));
}