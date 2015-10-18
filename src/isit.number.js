

import {not} from "helpers";
import {toString} from "utils";
import isNaN from "isit.nan";

export default function isNumber(obj) {
    return not(isNaN(obj)) && toString.call(obj) === "[object Number]";
}