

import isitInDateRange from "inDateRange";

export default function isitInNextYear(obj) {
    return isitInDateRange(obj, new Date(), new Date((new Date()).setDate((new Date()).getFullYear() + 1)));
}