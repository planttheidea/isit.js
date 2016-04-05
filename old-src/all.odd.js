// all version of odd.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitOdd from "./odd";

export default function isitAllOdd() {
    return all(isitOdd).apply(null, arraySlice.call(arguments));
}