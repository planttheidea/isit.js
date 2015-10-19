// any version of object.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitObject from "./object";

export default function isitAnyObject() {
    return any(isitObject).apply(null, arraySlice.call(arguments));
}