// not version of even.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitEven from "./even";

export default function isitNotEven() {
    return not(isitEven).apply(null, arraySlice.call(arguments));
}