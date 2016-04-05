// not version of desktop.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitDesktop from "./desktop";

export default function isitNotDesktop() {
    return not(isitDesktop).apply(null, arraySlice.call(arguments));
}