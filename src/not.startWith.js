// not version of startWith.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitStartWith from "./startWith";

export default function isitNotStartWith() {
    return not(isitStartWith).apply(null, arraySlice.call(arguments));
}