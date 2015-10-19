// all version of windowObject.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitWindowObject from "./windowObject";

export default function isitAllWindowObject() {
    return all(isitWindowObject).apply(null, arraySlice.call(arguments));
}