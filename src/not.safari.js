// not version of safari.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitSafari from "./safari";

export default function isitNotSafari() {
    return not(isitSafari).apply(null, arraySlice.call(arguments));
}