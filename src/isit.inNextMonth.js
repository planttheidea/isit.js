

import isInDateRange from "isit.inDateRange";

export default function isInNextMonth(obj) {
    return isInDateRange(obj, new Date(), new Date((new Date()).setDate((new Date()).getMonth() + 1)));
}