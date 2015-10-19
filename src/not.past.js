// not version of past.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitPast from "./past";

export default function isitNotPast() {
    return not(isitPast).apply(null, arraySlice.call(arguments));
}