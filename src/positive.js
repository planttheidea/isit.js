

import isitNumber from "number";

export default function isitPositive(obj) {
    return isitNumber(obj) && obj > 0;
}