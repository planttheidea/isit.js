// any version of startCase.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitStartCase from "./startCase";

export default function isitAnyStartCase() {
    return any(isitStartCase).apply(null, arraySlice.call(arguments));
}