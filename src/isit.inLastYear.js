

import isInDateRange from "isit.inDateRange";

export default function isInLastYear(obj) {
    return isInDateRange(obj, new Date((new Date()).setDate((new Date()).getFullYear() - 1)), new Date());
}