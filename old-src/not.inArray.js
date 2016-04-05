// not version of inArray.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitInArray from "./inArray";

export default function isitNotInArray() {
    return not(isitInArray).apply(null, arraySlice.call(arguments));
}