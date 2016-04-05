// not version of gecko.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitGecko from "./gecko";

export default function isitNotGecko() {
    return not(isitGecko).apply(null, arraySlice.call(arguments));
}