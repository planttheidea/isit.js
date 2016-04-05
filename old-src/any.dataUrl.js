// any version of dataUrl.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitDataUrl from "./dataUrl";

export default function isitAnyDataUrl() {
    return any(isitDataUrl).apply(null, arraySlice.call(arguments));
}