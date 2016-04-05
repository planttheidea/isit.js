// any version of kebabCase.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitKebabCase from "./kebabCase";

export default function isitAnyKebabCase() {
    return any(isitKebabCase).apply(null, arraySlice.call(arguments));
}