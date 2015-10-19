// not version of hexadecimal.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitHexadecimal from "./hexadecimal";

export default function isitNotHexadecimal() {
    return not(isitHexadecimal).apply(null, arraySlice.call(arguments));
}