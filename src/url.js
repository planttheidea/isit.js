

import {url} from "regexps";

export default function isitUrl(obj) {
    return url.test(obj);
}