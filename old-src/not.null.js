// not version of null.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitNull from "./null";

export default function isitNotNull() {
    return not(isitNull).apply(null, arraySlice.call(arguments));
}