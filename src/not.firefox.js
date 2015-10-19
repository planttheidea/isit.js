// not version of firefox.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitFirefox from "./firefox";

export default function isitNotFirefox() {
    return not(isitFirefox).apply(null, arraySlice.call(arguments));
}