// all version of falsy.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitFalsy from "./falsy";

export default function isitAllFalsy() {
    return all(isitFalsy).apply(null, arraySlice.call(arguments));
}