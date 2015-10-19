// not version of existy.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitExisty from "./existy";

export default function isitNotExisty() {
    return not(isitExisty).apply(null, arraySlice.call(arguments));
}