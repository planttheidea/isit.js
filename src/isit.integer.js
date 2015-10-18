

import isNumber from "isit.number";

export default function isInteger(obj) {
    return isNumber(obj) && obj % 1 === 0;
}