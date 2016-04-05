// not version of startCase.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitStartCase from "./startCase";

export default function isitNotStartCase() {
    return not(isitStartCase).apply(null, arraySlice.call(arguments));
}