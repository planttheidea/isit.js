// all version of startCase.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitStartCase from "./startCase";

export default function isitAllStartCase() {
    return all(isitStartCase).apply(null, arraySlice.call(arguments));
}