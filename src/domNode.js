// is obj a DOM node value?

import isitObject from "object";

export default function isitDomNode(obj) {
    return isitObject(obj) && obj.nodeType > 0;
}