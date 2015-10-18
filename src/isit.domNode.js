

import isObject from "isit.object";

export default function isDomNode(obj) {
    return isObject(obj) && obj.nodeType > 0;
}