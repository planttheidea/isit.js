// not version of integer.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitInteger from "./integer";

export default function isitNotInteger() {
    return not(isitInteger).apply(null, arraySlice.call(arguments));
}