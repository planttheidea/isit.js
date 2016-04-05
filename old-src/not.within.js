// not version of within.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitWithin from "./within";

export default function isitNotWithin() {
    return not(isitWithin).apply(null, arraySlice.call(arguments));
}