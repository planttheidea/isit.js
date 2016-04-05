// all version of socialSecurityNumber.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitSocialSecurityNumber from "./socialSecurityNumber";

export default function isitAllSocialSecurityNumber() {
    return all(isitSocialSecurityNumber).apply(null, arraySlice.call(arguments));
}