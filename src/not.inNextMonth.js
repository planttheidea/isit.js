// not version of inNextMonth.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitInNextMonth from "./inNextMonth";

export default function isitNotInNextMonth() {
    return not(isitInNextMonth).apply(null, arraySlice.call(arguments));
}