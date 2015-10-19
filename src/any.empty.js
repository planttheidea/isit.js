// any version of empty.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitEmpty from "./empty";

export default function isitAnyEmpty() {
    return any(isitEmpty).apply(null, arraySlice.call(arguments));
}