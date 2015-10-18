// is obj a number?

import {not} from "./_interfaces";
import {toString} from "./_utils";
import isitNaN from "./nan.js"; // it doesn't like just "nan"

export default function isitNumber(obj) {
    return not(isitNaN)(obj) && toString.call(obj) === "[object Number]";
}