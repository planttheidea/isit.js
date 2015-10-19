// not version of browser.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitBrowser from "./browser";

export default function isitNotBrowser() {
    return not(isitBrowser).apply(null, arraySlice.call(arguments));
}