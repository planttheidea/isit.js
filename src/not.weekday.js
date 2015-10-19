// not version of weekday.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitWeekday from "./weekday";

export default function isitNotWeekday() {
    return not(isitWeekday).apply(null, arraySlice.call(arguments));
}