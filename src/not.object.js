// not version of object.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitObject from "./object";

export default function isitNotObject() {
    return not(isitObject).apply(null, arraySlice.call(arguments));
}