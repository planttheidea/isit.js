

import {toString} from "./utils";

export default Array.isArray || function isitArray(obj) {
    return toString.call(obj) === "[object Array]";
};