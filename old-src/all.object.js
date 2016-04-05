// all version of object.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitObject from "./object";

export default function isitAllObject() {
    return all(isitObject).apply(null, arraySlice.call(arguments));
}