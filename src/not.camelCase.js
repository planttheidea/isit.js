// not version of camelCase.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitCamelCase from "./camelCase";

export default function isitNotCamelCase() {
    return not(isitCamelCase).apply(null, arraySlice.call(arguments));
}