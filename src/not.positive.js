// not version of positive.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitPositive from "./positive";

export default function isitNotPositive() {
    return not(isitPositive).apply(null, arraySlice.call(arguments));
}