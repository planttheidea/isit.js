// not version of socialSecurityNumber.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitSocialSecurityNumber from "./socialSecurityNumber";

export default function isitNotSocialSecurityNumber() {
    return not(isitSocialSecurityNumber).apply(null, arraySlice.call(arguments));
}