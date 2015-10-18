

import {not} from "helpers";
import isNaN from "isit.nan";

export default isFinite || function isFinite(obj) {
    return obj !== Infinity && obj !== -Infinity && not(isNaN(obj));
}