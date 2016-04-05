

import {dataUrl} from "./_regexps";

export default function isitDataUrl(obj) {
    return dataUrl.test(obj);
}