// all version of caPostalCode.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitCAPostalCode from "./caPostalCode";

export default function isitAllCAPostalCode() {
    return all(isitCAPostalCode).apply(null, arraySlice.call(arguments));
}