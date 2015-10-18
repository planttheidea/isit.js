

import {ip} from "regexps";

export default function _isIp(obj) {
    return ip.test(obj);
}