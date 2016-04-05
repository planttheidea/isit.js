// not version of regexp.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitRegExp from "./regexp";

export default function isitNotRegExp() {
    return not(isitRegExp).apply(null, arraySlice.call(arguments));
}