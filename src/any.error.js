// any version of error.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitError from "./error";

export default function isitAnyError() {
    return any(isitError).apply(null, arraySlice.call(arguments));
}