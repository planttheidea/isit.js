// not version of touchDevice.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitTouchDevice from "./touchDevice";

export default function isitNotTouchDevice() {
    return not(isitTouchDevice).apply(null, arraySlice.call(arguments));
}