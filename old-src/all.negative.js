// all version of negative.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitNegative from "./negative";

export default function isitAllNegative() {
    return all(isitNegative).apply(null, arraySlice.call(arguments));
}