

import isInDateRange from "isit.inDateRange";

export default function isInNextWeek(obj) {
    return isInDateRange(obj, new Date(), new Date((new Date()).setDate((new Date()).getDate() + 7)));
}