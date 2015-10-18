

import _isInDateRange from "inDateRange";

export default function _isInLastMonth(obj) {
    return _isInDateRange(obj, new Date((new Date()).setDate((new Date()).getMonth() - 1)), new Date());
}