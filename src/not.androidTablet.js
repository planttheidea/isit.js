// not version of androidTablet.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitAndroidTablet from "./androidTablet";

export default function isitNotAndroidTablet() {
    return not(isitAndroidTablet).apply(null, arraySlice.call(arguments));
}