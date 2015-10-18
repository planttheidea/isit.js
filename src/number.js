

import {not} from "helpers";
import {toString} from "utils";
import isitNaN from "nan.js"; // it doesn't like just "nan"

export default function isitNumber(obj) {
    return not(isitNaN)(obj) && toString.call(obj) === "[object Number]";
}