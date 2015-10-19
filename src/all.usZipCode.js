// all version of usZipCode.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitUSZipCode from "./usZipCode";

export default function isitAllUSZipCode() {
    return all(isitUSZipCode).apply(null, arraySlice.call(arguments));
}