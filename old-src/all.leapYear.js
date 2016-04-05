// all version of leapYear.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitLeapYear from "./leapYear";

export default function isitAllLeapYear() {
    return all(isitLeapYear).apply(null, arraySlice.call(arguments));
}