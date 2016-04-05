// any version of doubleByte.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitDoubleByte from "./doubleByte";

export default function isitAnyDoubleByte() {
    return any(isitDoubleByte).apply(null, arraySlice.call(arguments));
}