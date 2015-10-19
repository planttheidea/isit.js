// not version of blink.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitBlink from "./blink";

export default function isitNotBlink() {
    return not(isitBlink).apply(null, arraySlice.call(arguments));
}