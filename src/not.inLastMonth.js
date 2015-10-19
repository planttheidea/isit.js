// not version of inLastMonth.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitInLastMonth from "./inLastMonth";

export default function isitNotInLastMonth() {
    return not(isitInLastMonth).apply(null, arraySlice.call(arguments));
}