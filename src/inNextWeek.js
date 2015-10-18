

import _isInDateRange from "inDateRange";

export default function _isInNextWeek(obj) {
    return _isInDateRange(obj, new Date(), new Date((new Date()).setDate((new Date()).getDate() + 7)));
}