// not version of caPostalCode.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitCAPostalCode from "./caPostalCode";

export default function isitNotCAPostalCode() {
    return not(isitCAPostalCode).apply(null, arraySlice.call(arguments));
}