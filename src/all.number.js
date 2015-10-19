// all version of number.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitNumber from "./number";

export default function isitAllNumber() {
    return all(isitNumber).apply(null, arraySlice.call(arguments));
}