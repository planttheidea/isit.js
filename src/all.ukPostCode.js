// all version of ukPostCode.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitUKPostCode from "./ukPostCode";

export default function isitAllUKPostCode() {
    return all(isitUKPostCode).apply(null, arraySlice.call(arguments));
}