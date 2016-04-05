// not version of endWith.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitEndWith from "./endWith";

export default function isitNotEndWith() {
    return not(isitEndWith).apply(null, arraySlice.call(arguments));
}