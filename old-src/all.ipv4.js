// all version of ipv4.js

import {all} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitIpv4 from "./ipv4";

export default function isitAllIpv4() {
    return all(isitIpv4).apply(null, arraySlice.call(arguments));
}