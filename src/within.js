

import {all} from "helpers";
import _isNumber from "number";

export default function _isWithin(obj, min, max) {
    return all(_isNumber(obj, min, max)) && obj > min && obj < max;
}