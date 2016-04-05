// not version of inLastYear.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitInLastYear from "./inLastYear";

export default function isitNotInLastYear() {
    return not(isitInLastYear).apply(null, arraySlice.call(arguments));
}