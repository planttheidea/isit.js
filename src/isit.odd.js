

import isNumber from "isit.number";

export default function isOdd(obj) {
    return isNumber(obj) && obj % 2 !== 0;
}