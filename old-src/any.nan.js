// any version of nan.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitNaN from "./nan.js";

export default function isitAnyNaN() {
    return any(isitNaN).apply(null, arraySlice.call(arguments));
}