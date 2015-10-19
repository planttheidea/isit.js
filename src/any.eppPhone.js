// any version of eppPhone.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitEppPhone from "./eppPhone";

export default function isitAnyEppPhone() {
    return any(isitEppPhone).apply(null, arraySlice.call(arguments));
}