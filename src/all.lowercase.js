// all version of lowercase.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitLowercase from "./lowercase";

export default function isitAllLowercase() {
    return all(isitLowercase).apply(null, arraySlice.call(arguments));
}