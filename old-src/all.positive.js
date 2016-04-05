// all version of positive.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitPositive from "./positive";

export default function isitAllPositive() {
    return all(isitPositive).apply(null, arraySlice.call(arguments));
}