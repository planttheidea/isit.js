

import isitNumber from "number";

export default function isitOdd(obj) {
    return isitNumber(obj) && obj % 2 !== 0;
}