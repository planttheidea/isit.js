// is obj in the future compared to now?

import isitDate from "./date";

export default function isitFuture(obj) {
    return isitDate(obj) && obj.getTime() > (new Date()).getTime();
}