// not version of negative.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitNegative from "./negative";

export default function isitNotNegative() {
    return not(isitNegative).apply(null, arraySlice.call(arguments));
}