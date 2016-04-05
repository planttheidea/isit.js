// any version of hexadecimal.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitHexadecimal from "./hexadecimal";

export default function isitAnyHexadecimal() {
    return any(isitHexadecimal).apply(null, arraySlice.call(arguments));
}