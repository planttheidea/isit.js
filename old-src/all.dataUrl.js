// all version of dataUrl.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitDataUrl from "./dataUrl";

export default function isitAllDataUrl() {
    return all(isitDataUrl).apply(null, arraySlice.call(arguments));
}