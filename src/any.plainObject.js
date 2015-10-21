// any version of plainObject.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitPlainObject from "./plainObject";

export default function isitAnyPlainObject() {
    return any(isitPlainObject).apply(null, arraySlice.call(arguments));
}