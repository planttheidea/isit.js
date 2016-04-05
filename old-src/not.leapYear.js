// not version of leapYear.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitLeapYear from "./leapYear";

export default function isitNotLeapYear() {
    return not(isitLeapYear).apply(null, arraySlice.call(arguments));
}