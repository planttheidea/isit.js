// is obj in the next week compared to now?

import isitInDateRange from "inDateRange";

export default function isitInNextWeek(obj) {
    return isitInDateRange(obj, new Date(), new Date((new Date()).setDate((new Date()).getDate() + 7)));
}