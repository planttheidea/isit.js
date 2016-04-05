// not version of above.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitAbove from "./above";

export default function isitNotAbove() {
    return not(isitAbove).apply(null, arraySlice.call(arguments));
}