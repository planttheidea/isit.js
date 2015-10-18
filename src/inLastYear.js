

import _isInDateRange from "inDateRange";

export default function _isInLastYear(obj) {
    return _isInDateRange(obj, new Date((new Date()).setDate((new Date()).getFullYear() - 1)), new Date());
}