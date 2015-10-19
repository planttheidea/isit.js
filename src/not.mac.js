// not version of mac.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitMac from "./mac";

export default function isitNotMac() {
    return not(isitMac).apply(null, arraySlice.call(arguments));
}