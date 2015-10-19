// all version of capitalized.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitCapitalized from "./capitalized";

export default function isitAllCapitalized() {
    return all(isitCapitalized).apply(null, arraySlice.call(arguments));
}