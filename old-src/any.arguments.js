// any version of arguments.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitArguments from "./arguments";

export default function isitAnyArguments() {
    return any(isitArguments).apply(null, arraySlice.call(arguments));
}