

import {not} from "helpers";
import _isNaN from "nan";

export default isFinite || function _isFinite(obj) {
    return obj !== Infinity && obj !== -Infinity && not(_isNaN(obj));
};;