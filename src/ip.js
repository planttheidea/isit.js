// is obj a valid IP address?

import {ip} from "./regexps";

export default function isitIp(obj) {
    return ip.test(obj);
}