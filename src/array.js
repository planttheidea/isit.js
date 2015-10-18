

import {toString} from "./utils";

export default Array.isArray || function _isArray(obj) {
    return toString.call(obj) === "[object Array]";
};