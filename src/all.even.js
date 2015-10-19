// all version of even.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitEven from "./even";

export default function isitAllEven() {
    return all(isitEven).apply(null, arraySlice.call(arguments));
}