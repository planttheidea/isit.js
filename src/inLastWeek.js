

import isitInDateRange from "inDateRange";

export default function isitInLastWeek(obj) {
    return isitInDateRange(obj, new Date((new Date()).setDate((new Date()).getDate() - 7)), new Date());
}