// any version of caPostalCode.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitCAPostalCode from "./caPostalCode";

export default function isitAnyCAPostalCode() {
    return any(isitCAPostalCode).apply(null, arraySlice.call(arguments));
}