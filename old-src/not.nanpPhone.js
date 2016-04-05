// not version of nanpPhone.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitNanpPhone from "./nanpPhone";

export default function isitNotNanpPhone() {
    return not(isitNanpPhone).apply(null, arraySlice.call(arguments));
}