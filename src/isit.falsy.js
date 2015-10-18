

import {not} from "helpers";
import isTruthy from "isit.truthy";

export default function isFalsy(obj) {
    return not(isTruthy(obj));
};