// not version of inLastWeek.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitInLastWeek from "./inLastWeek";

export default function isitNotInLastWeek() {
    return not(isitInLastWeek).apply(null, arraySlice.call(arguments));
}