

import {ipv4} from "regexps";

export default function isIpv4(obj) {
    return ipv4.test(obj);
}