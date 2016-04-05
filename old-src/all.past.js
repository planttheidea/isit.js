// all version of past.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitPast from "./past";

export default function isitAllPast() {
    return all(isitPast).apply(null, arraySlice.call(arguments));
}