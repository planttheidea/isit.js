// not version of ukPostCode.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitUKPostCode from "./ukPostCode";

export default function isitNotUKPostCode() {
    return not(isitUKPostCode).apply(null, arraySlice.call(arguments));
}