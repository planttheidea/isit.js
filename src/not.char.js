// not version of char.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitChar from "./char";

export default function isitNotChar() {
    return not(isitChar).apply(null, arraySlice.call(arguments));
}