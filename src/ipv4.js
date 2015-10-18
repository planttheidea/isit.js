

import {ipv4} from "regexps";

export default function isitIpv4(obj) {
    return ipv4.test(obj);
}