// not version of eppPhone.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitEppPhone from "./eppPhone";

export default function isitNotEppPhone() {
    return not(isitEppPhone).apply(null, arraySlice.call(arguments));
}