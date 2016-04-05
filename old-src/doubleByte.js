// is obj a string and does it contain two-byte (or non-Latin) characters?

import {doubleByte} from "./_regexps";
import isitString from "./string";

export default function isitDoubleByte(obj) {
    return isitString(obj) && doubleByte.test(obj);
}