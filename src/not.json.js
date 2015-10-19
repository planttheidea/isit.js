// not version of json.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitJSON from "./json";

export default function isitNotJSON() {
    return not(isitJSON).apply(null, arraySlice.call(arguments));
}