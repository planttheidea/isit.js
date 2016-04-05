// not version of year.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitYear from "./year";

export default function isitNotYear() {
    return not(isitYear).apply(null, arraySlice.call(arguments));
}