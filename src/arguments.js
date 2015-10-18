// is obj a set of function arguments?

import {not} from "helpers";
import {toString} from "utils";
import isitNull from "null";

export default function isitArguments(obj) {
    return not(isitNull)(obj) && toString.call(obj) === "[object Arguments]" || (typeof obj === "object" && "callee" in obj);
}