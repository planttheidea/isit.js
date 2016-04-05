// not version of daylightSavingTime.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitDaylightSavingTime from "./daylightSavingTime";

export default function isitNotDaylightSavingTime() {
    return not(isitDaylightSavingTime).apply(null, arraySlice.call(arguments));
}