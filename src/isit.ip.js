

import {ip} from "regexps";

export default function isIp(obj) {
    return ip.test(obj);
}