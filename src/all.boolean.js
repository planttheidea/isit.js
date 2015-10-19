// all version of boolean.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitBoolean from "./boolean";

export default function isitAllBoolean() {
    return all(isitBoolean).apply(null, arraySlice.call(arguments));
}