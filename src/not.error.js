// not version of error.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitError from "./error";

export default function isitNotError() {
    return not(isitError).apply(null, arraySlice.call(arguments));
}