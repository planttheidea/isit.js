// all version of weekday.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitWeekday from "./weekday";

export default function isitAllWeekday() {
    return all(isitWeekday).apply(null, arraySlice.call(arguments));
}