

import {toString} from "./utils";

export default function _isError(obj) {
    return toString.call(obj) === "[object Error]";
}