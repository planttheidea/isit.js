// all version of integer.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitInteger from "./integer";

export default function isitAllInteger() {
    return all(isitInteger).apply(null, arraySlice.call(arguments));
}