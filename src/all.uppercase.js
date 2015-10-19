// all version of uppercase.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitUppercase from "./uppercase";

export default function isitAllUppercase() {
    return all(isitUppercase).apply(null, arraySlice.call(arguments));
}