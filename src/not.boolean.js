// not version of boolean.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitBoolean from "./boolean";

export default function isitNotBoolean() {
    return not(isitBoolean).apply(null, arraySlice.call(arguments));
}