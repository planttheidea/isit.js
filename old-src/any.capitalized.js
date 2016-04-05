// any version of capitalized.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitCapitalized from "./capitalized";

export default function isitAnyCapitalized() {
    return any(isitCapitalized).apply(null, arraySlice.call(arguments));
}