// is obj a valid IP address?

import {ip} from "./_regexps";

export default function isitIp(obj) {
    return ip.test(obj);
}