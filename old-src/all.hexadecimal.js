// all version of hexadecimal.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitHexadecimal from "./hexadecimal";

export default function isitAllHexadecimal() {
    return all(isitHexadecimal).apply(null, arraySlice.call(arguments));
}