// not version of sameType.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitSameType from "./sameType";

export default function isitNotSameType() {
    return not(isitSameType).apply(null, arraySlice.call(arguments));
}