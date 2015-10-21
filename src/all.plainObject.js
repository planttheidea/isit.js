// all version of plainObject.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitPlainObject from "./plainObject";

export default function isitAllPlainObject() {
    return all(isitPlainObject).apply(null, arraySlice.call(arguments));
}