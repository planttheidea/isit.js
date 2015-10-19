// any version of boolean.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitBoolean from "./boolean";

export default function isitAnyBoolean() {
    return any(isitBoolean).apply(null, arraySlice.call(arguments));
}