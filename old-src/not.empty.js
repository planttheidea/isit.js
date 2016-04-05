// not version of empty.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitEmpty from "./empty";

export default function isitNotEmpty() {
    return not(isitEmpty).apply(null, arraySlice.call(arguments));
}