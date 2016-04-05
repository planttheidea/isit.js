// not version of trident.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitTrident from "./trident";

export default function isitNotTrident() {
    return not(isitTrident).apply(null, arraySlice.call(arguments));
}