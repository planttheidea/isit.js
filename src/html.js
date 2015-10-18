// is obj a string and does it HTML tags?

import {html} from "./_regexps";
import isitString from "./string";

export default function isitHtml(obj) {
    return isitString(obj) && html.test(obj);
}