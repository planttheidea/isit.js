// any version of leapYear.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitLeapYear from "./leapYear";

export default function isitAnyLeapYear() {
    return any(isitLeapYear).apply(null, arraySlice.call(arguments));
}