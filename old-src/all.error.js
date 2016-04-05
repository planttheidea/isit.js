// all version of error.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitError from "./error";

export default function isitAllError() {
    return all(isitError).apply(null, arraySlice.call(arguments));
}