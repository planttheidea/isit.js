// any version of socialSecurityNumber.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitSocialSecurityNumber from "./socialSecurityNumber";

export default function isitAnySocialSecurityNumber() {
    return any(isitSocialSecurityNumber).apply(null, arraySlice.call(arguments));
}