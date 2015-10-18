

import {all} from "helpers";
import _isNumber from "number";

export default function _isUnder(obj, max) {
    return all(_isNumber(obj, max)) && obj < max;
}