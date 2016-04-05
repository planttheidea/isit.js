// not version of chrome.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitChrome from "./chrome";

export default function isitNotChrome() {
    return not(isitChrome).apply(null, arraySlice.call(arguments));
}