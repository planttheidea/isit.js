// not version of inNextYear.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitInNextYear from "./inNextYear";

export default function isitNotInNextYear() {
    return not(isitInNextYear).apply(null, arraySlice.call(arguments));
}