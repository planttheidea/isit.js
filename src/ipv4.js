

import {ipv4} from "regexps";

export default function _isIpv4(obj) {
    return ipv4.test(obj);
}