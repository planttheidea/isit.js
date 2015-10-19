// any version of existy.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitExisty from "./existy";

export default function isitAnyExisty() {
    return any(isitExisty).apply(null, arraySlice.call(arguments));
}