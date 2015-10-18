// is obj a number and is it even?

import isitNumber from "./number";

export default function isitEven(obj) {
    return isitNumber(obj) && obj % 2 === 0;
}