

import {not} from "helpers";
import {toString} from "utils";
import isNull from "isit.null";

export default function isArguments(obj) {
    return not(isNull(obj)) && toString.call(obj) === "[object Arguments]" || (typeof obj === "object" && "callee" in obj);
}