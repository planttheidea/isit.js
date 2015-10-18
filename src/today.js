// is obj a date and is it the same as today?

import isitDate from "./date";

export default function isitToday(obj) {
    return isitDate(obj) && obj.toDateString() === (new Date()).toDateString();
}