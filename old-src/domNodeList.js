// is obj a NodeList value?

import {
    hasOwnProperty,
    toString
} from "./_utils";
import isitObject from "./object";

export default function isitDOMNodeList(obj) {
    return isitObject(obj) && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(toString.call(obj)) &&
        hasOwnProperty.call(obj, "length") && obj.length === 0 || isitObject(obj[0]) && obj[0].nodeType > 0;
}
