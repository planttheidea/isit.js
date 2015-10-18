

import {
    toString
} from "./utils";

export default Array.isArray || function isArray(obj) {
    return toString.call(obj) === "[object Array]";
}