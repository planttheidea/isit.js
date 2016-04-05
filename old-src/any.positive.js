// any version of positive.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitPositive from "./positive";

export default function isitAnyPositive() {
    return any(isitPositive).apply(null, arraySlice.call(arguments));
}