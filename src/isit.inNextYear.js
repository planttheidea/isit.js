

import isInDateRange from "isit.inDateRange";

export default function isInNextYear(obj) {
    return isInDateRange(obj, new Date(), new Date((new Date()).setDate((new Date()).getFullYear() + 1)));
}