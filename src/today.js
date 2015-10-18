

import isitDate from "date";

export default function isitToday(obj) {
    return isitDate(obj) && obj.toDateString() === (new Date()).toDateString();
}