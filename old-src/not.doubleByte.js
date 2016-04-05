// not version of doubleByte.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitDoubleByte from "./doubleByte";

export default function isitNotDoubleByte() {
    return not(isitDoubleByte).apply(null, arraySlice.call(arguments));
}