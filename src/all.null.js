// all version of null.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitNull from "./null";

export default function isitAllNull() {
    return all(isitNull).apply(null, arraySlice.call(arguments));
}