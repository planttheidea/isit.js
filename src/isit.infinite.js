

import {not} from "helpers";
import isFinite from "isit.finite";

export default function isInfinite(obj) {
    return not(isFinite(obj));
}