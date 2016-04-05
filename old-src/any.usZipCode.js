// any version of usZipCode.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitUSZipCode from "./usZipCode";

export default function isitAnyUSZipCode() {
    return any(isitUSZipCode).apply(null, arraySlice.call(arguments));
}