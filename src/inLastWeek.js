

import _isInDateRange from "inDateRange";

export default function _isInLastWeek(obj) {
    return _isInDateRange(obj, new Date((new Date()).setDate((new Date()).getDate() - 7)), new Date());
}