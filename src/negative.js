// is obj a negative number?

import isitNumber from "number";

export default function isitNegative(obj) {
    return isitNumber(obj) && obj < 0;
}