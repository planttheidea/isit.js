// is obj not a finite value?

import {not} from "./_interfaces";
import isitFinite from "./finite";

export default function isInfinite(obj) {
    return not(isitFinite)(obj);
}