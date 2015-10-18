

import {ip} from "regexps";

export default function isitIp(obj) {
    return ip.test(obj);
}