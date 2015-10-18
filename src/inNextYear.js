

import _isInDateRange from "inDateRange";

export default function _isInNextYear(obj) {
    return _isInDateRange(obj, new Date(), new Date((new Date()).setDate((new Date()).getFullYear() + 1)));
}