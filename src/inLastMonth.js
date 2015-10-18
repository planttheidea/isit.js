

import isitInDateRange from "inDateRange";

export default function isitInLastMonth(obj) {
    return isitInDateRange(obj, new Date((new Date()).setDate((new Date()).getMonth() - 1)), new Date());
}