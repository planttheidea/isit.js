// not version of whitespace.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitWhitespace from "./whitespace";

export default function isitNotWhitespace() {
    return not(isitWhitespace).apply(null, arraySlice.call(arguments));
}