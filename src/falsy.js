

import {not} from "helpers";
import _isTruthy from "truthy";

export default function _isFalsy(obj) {
    return not(_isTruthy(obj));
};