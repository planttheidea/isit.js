// all version of empty.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitEmpty from "./empty";

export default function isitAllEmpty() {
    return all(isitEmpty).apply(null, arraySlice.call(arguments));
}