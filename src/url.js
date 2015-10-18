

import {url} from "regexps";

export default function _isUrl(obj) {
    return url.test(obj);
}