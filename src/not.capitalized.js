// not version of capitalized.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitCapitalized from "./capitalized";

export default function isitNotCapitalized() {
    return not(isitCapitalized).apply(null, arraySlice.call(arguments));
}