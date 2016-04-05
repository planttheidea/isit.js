// not version of plainObject.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitPlainObject from "./plainObject";

export default function isitNotPlainObject() {
    return not(isitPlainObject).apply(null, arraySlice.call(arguments));
}