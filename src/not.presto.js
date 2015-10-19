// not version of presto.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitPresto from "./presto";

export default function isitNotPresto() {
    return not(isitPresto).apply(null, arraySlice.call(arguments));
}