// not version of weekend.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitWeekend from "./weekend";

export default function isitNotWeekend() {
    return not(isitWeekend).apply(null, arraySlice.call(arguments));
}