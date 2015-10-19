// all version of json.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitJSON from "./json";

export default function isitAllJSON() {
    return all(isitJSON).apply(null, arraySlice.call(arguments));
}