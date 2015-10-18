

import {ipv6} from "regexps";

export default function isIpv6(obj) {
    return ipv6.test(obj);
}