

import isNumber from "isit.number";

export default function isEven(obj) {
    return isNumber(obj) && obj % 2 === 0;
}