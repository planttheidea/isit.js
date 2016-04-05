// any version of camelCase.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitCamelCase from "./camelCase";

export default function isitAnyCamelCase() {
    return any(isitCamelCase).apply(null, arraySlice.call(arguments));
}