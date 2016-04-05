// any version of json.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitJSON from "./json";

export default function isitAnyJSON() {
    return any(isitJSON).apply(null, arraySlice.call(arguments));
}