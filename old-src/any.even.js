// any version of even.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitEven from "./even";

export default function isitAnyEven() {
    return any(isitEven).apply(null, arraySlice.call(arguments));
}