// any version of weekday.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitWeekday from "./weekday";

export default function isitAnyWeekday() {
    return any(isitWeekday).apply(null, arraySlice.call(arguments));
}