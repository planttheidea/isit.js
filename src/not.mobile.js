// not version of mobile.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitMobile from "./mobile";

export default function isitNotMobile() {
    return not(isitMobile).apply(null, arraySlice.call(arguments));
}