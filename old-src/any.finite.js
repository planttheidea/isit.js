// any version of finite.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitFinite from "./finite";

export default function isitAnyFinite() {
    return any(isitFinite).apply(null, arraySlice.call(arguments));
}