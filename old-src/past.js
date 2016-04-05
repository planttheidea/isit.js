// is obj in the past compared to now?

import isitDate from "./date";

export default function isitPast(obj) {
    return isitDate(obj) && obj.getTime() < (new Date()).getTime();
}