// not version of today.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitToday from "./today";

export default function isitNotToday() {
    return not(isitToday).apply(null, arraySlice.call(arguments));
}