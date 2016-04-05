// not version of inNextWeek.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitInNextWeek from "./inNextWeek";

export default function isitNotInNextWeek() {
    return not(isitInNextWeek).apply(null, arraySlice.call(arguments));
}