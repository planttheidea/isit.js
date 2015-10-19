// all version of eppPhone.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitEppPhone from "./eppPhone";

export default function isitAllEppPhone() {
    return all(isitEppPhone).apply(null, arraySlice.call(arguments));
}