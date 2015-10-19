// all version of doubleByte.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitDoubleByte from "./doubleByte";

export default function isitAllDoubleByte() {
    return all(isitDoubleByte).apply(null, arraySlice.call(arguments));
}