// is obj a truthy value?
// NOTE: matches the language, so valid values are objects, functions,
// arrays, strings with length, and integers greater than 0

import {not} from "helpers";
import isitExisty from "existy";
import isitNaN from "nan.js";

export default function isitTruthy(obj) {
    return isitExisty(obj) && obj !== false && not(isitNaN)(obj) && obj !== "" && obj !== 0;
};