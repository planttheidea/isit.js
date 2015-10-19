// not version of dataUrl.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitDataUrl from "./dataUrl";

export default function isitNotDataUrl() {
    return not(isitDataUrl).apply(null, arraySlice.call(arguments));
}