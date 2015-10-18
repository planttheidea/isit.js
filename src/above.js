

import {all} from "helpers";
import _isNumber from "number";

export default function _isAbove(obj, min) {
    return all(_isNumber(obj, min)) && obj > min;
}