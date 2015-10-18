

import {ipv6} from "regexps";

export default function isitIpv6(obj) {
    return ipv6.test(obj);
}