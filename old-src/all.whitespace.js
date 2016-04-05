// all version of whitespace.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitWhitespace from "./whitespace";

export default function isitAllWhitespace() {
    return all(isitWhitespace).apply(null, arraySlice.call(arguments));
}