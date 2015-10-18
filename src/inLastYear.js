// is obj in the last year compared to now?

import isitInDateRange from "inDateRange";

export default function isitInLastYear(obj) {
    return isitInDateRange(obj, new Date((new Date()).setDate((new Date()).getFullYear() - 1)), new Date());
}