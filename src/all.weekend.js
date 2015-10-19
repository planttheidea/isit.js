// all version of weekend.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitWeekend from "./weekend";

export default function isitAllWeekend() {
    return all(isitWeekend).apply(null, arraySlice.call(arguments));
}