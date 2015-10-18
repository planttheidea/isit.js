

import {url} from "regexps";

export default function isUrl(obj) {
    return url.test(obj);
}