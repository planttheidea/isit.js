

import isitNumber from "number";

export default function isitInteger(obj) {
    return isitNumber(obj) && obj % 1 === 0;
}