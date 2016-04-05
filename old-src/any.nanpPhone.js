// any version of nanpPhone.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitNanpPhone from "./nanpPhone";

export default function isitAnyNanpPhone() {
    return any(isitNanpPhone).apply(null, arraySlice.call(arguments));
}