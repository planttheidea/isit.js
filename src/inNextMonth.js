

import _isInDateRange from "inDateRange";

export default function _isInNextMonth(obj) {
    return _isInDateRange(obj, new Date(), new Date((new Date()).setDate((new Date()).getMonth() + 1)));
}