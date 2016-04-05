// not version of opera.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitOpera from "./opera";

export default function isitNotOpera() {
    return not(isitOpera).apply(null, arraySlice.call(arguments));
}