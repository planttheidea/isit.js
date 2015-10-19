// not version of ie.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitIe from "./ie";

export default function isitNotIe() {
    return not(isitIe).apply(null, arraySlice.call(arguments));
}