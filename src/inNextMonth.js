// is obj in the next month compared to now?

import isitInDateRange from "inDateRange";

export default function isitInNextMonth(obj) {
    return isitInDateRange(obj, new Date(), new Date((new Date()).setDate((new Date()).getMonth() + 1)));
}