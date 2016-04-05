// not version of month.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitMonth from "./month";

export default function isitNotMonth() {
    return not(isitMonth).apply(null, arraySlice.call(arguments));
}