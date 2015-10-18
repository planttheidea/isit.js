

import {toString} from "./utils";

export default function isError(obj) {
    return toString.call(obj) === "[object Error]";
}