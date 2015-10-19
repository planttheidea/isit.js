// not version of nan.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitNaN from "./nan.js";

export default function isitNotNaN() {
    return not(isitNaN).apply(null, arraySlice.call(arguments));
}