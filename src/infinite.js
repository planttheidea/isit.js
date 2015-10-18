

import isitFinite from "finite";

export default function isInfinite(obj) {
    return !isitFinite(obj);
}