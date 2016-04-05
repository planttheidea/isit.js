// not version of under.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitUnder from "./under";

export default function isitNotUnder() {
    return not(isitUnder).apply(null, arraySlice.call(arguments));
}