// not version of usZipCode.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitUSZipCode from "./usZipCode";

export default function isitNotUSZipCode() {
    return not(isitUSZipCode).apply(null, arraySlice.call(arguments));
}