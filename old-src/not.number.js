// not version of number.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitNumber from "./number";

export default function isitNotNumber() {
    return not(isitNumber).apply(null, arraySlice.call(arguments));
}