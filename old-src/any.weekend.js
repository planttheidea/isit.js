// any version of weekend.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitWeekend from "./weekend";

export default function isitAnyWeekend() {
    return any(isitWeekend).apply(null, arraySlice.call(arguments));
}