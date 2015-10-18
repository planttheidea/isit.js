// is obj a decimal value?

import isitNumber from "./number";

export default function isitDecimal(obj) {
    return isitNumber(obj) && obj % 1 !== 0;
}