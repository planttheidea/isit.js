// all version of kebabCase.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitKebabCase from "./kebabCase";

export default function isitAllKebabCase() {
    return all(isitKebabCase).apply(null, arraySlice.call(arguments));
}