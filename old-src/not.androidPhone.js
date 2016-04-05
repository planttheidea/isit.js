// not version of androidPhone.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitAndroidPhone from "./androidPhone";

export default function isitNotAndroidPhone() {
    return not(isitAndroidPhone).apply(null, arraySlice.call(arguments));
}