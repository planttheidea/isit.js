// any version of windowObject.js

import {any} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitWindowObject from "./windowObject";

export default function isitAnyWindowObject() {
    return any(isitWindowObject).apply(null, arraySlice.call(arguments));
}