// all version of existy.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitExisty from "./existy";

export default function isitAllExisty() {
    return all(isitExisty).apply(null, arraySlice.call(arguments));
}