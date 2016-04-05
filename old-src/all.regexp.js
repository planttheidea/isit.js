// all version of regexp.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitRegExp from "./regexp";

export default function isitAllRegExp() {
    return all(isitRegExp).apply(null, arraySlice.call(arguments));
}