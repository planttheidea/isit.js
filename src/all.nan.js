// all version of nan.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitNaN from "./nan.js";

export default function isitAllNaN() {
    return all(isitNaN).apply(null, arraySlice.call(arguments));
}