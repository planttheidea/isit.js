// all version of arguments.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitArguments from "./arguments";

export default function isitAllArguments() {
    return all(isitArguments).apply(null, arraySlice.call(arguments));
}