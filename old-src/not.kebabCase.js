// not version of kebabCase.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitKebabCase from "./kebabCase";

export default function isitNotKebabCase() {
    return not(isitKebabCase).apply(null, arraySlice.call(arguments));
}