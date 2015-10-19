// not version of windowObject.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitWindowObject from "./windowObject";

export default function isitNotWindowObject() {
    return not(isitWindowObject).apply(null, arraySlice.call(arguments));
}