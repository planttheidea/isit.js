// all version of finite.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitFinite from "./finite";

export default function isitAllFinite() {
    return all(isitFinite).apply(null, arraySlice.call(arguments));
}