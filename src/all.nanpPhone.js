// all version of nanpPhone.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitNanpPhone from "./nanpPhone";

export default function isitAllNanpPhone() {
    return all(isitNanpPhone).apply(null, arraySlice.call(arguments));
}