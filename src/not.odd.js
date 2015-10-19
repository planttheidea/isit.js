// not version of odd.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitOdd from "./odd";

export default function isitNotOdd() {
    return not(isitOdd).apply(null, arraySlice.call(arguments));
}