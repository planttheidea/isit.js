// not version of include.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitInclude from "./include";

export default function isitNotInclude() {
    return not(isitInclude).apply(null, arraySlice.call(arguments));
}