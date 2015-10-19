// not version of finite.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitFinite from "./finite";

export default function isitNotFinite() {
    return not(isitFinite).apply(null, arraySlice.call(arguments));
}