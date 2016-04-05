// not version of online.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitOnline from "./online";

export default function isitNotOnline() {
    return not(isitOnline).apply(null, arraySlice.call(arguments));
}