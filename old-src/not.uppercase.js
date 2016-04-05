// not version of uppercase.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitUppercase from "./uppercase";

export default function isitNotUppercase() {
    return not(isitUppercase).apply(null, arraySlice.call(arguments));
}