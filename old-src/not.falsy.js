// not version of falsy.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitFalsy from "./falsy";

export default function isitNotFalsy() {
    return not(isitFalsy).apply(null, arraySlice.call(arguments));
}