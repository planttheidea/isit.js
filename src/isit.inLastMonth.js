

import isInDateRange from "isit.inDateRange";

export default function isInLastMonth(obj) {
    return isInDateRange(obj, new Date((new Date()).setDate((new Date()).getMonth() - 1)), new Date());
}