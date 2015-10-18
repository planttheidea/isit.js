

import {not} from "helpers";
import {toString} from "utils";
import _isNull from "null";

export default function _isArguments(obj) {
    return not(_isNull(obj)) && toString.call(obj) === "[object Arguments]" || (typeof obj === "object" && "callee" in obj);
}