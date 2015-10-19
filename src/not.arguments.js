// not version of arguments.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitArguments from "./arguments";

export default function isitNotArguments() {
    return not(isitArguments).apply(null, arraySlice.call(arguments));
}