

import {not} from "helpers";
import _isExisty from "existy";
import _isNaN from "nan";

export default function _isTruthy(obj) {
    return _isExisty(obj) && obj !== false && not(_isNaN(obj)) && obj !== "" && obj !== 0;
};