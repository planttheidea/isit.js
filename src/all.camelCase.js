// all version of camelCase.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitCamelCase from "./camelCase";

export default function isitAllCamelCase() {
    return all(isitCamelCase).apply(null, arraySlice.call(arguments));
}