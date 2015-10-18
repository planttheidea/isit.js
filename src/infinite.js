

import _isFinite from "finite";

export default function isInfinite(obj) {
    return !_isFinite(obj);
}