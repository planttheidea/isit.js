

import isInDateRange from "isit.inDateRange";

export default function isInLastWeek(obj) {
    return isInDateRange(obj, new Date((new Date()).setDate((new Date()).getDate() - 7)), new Date());
}