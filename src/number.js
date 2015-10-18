

import {not} from "helpers";
import {toString} from "utils";
import _isNaN from "nan.js"; // it doesn't like just "nan"

export default function _isNumber(obj) {
    return not(_isNaN(obj)) && toString.call(obj) === "[object Number]";
}