

import {ipv6} from "regexps";

export default function _isIpv6(obj) {
    return ipv6.test(obj);
}