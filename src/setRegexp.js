// function to either override existing regex tests or create new ones

import {hasOwnProperty} from "utils";
import regexps from "regexps";

export default function setRegexp(regexp, regexpName) {
    for (let r in regexps) {
        if (hasOwnProperty.call(regexps, r) && (regexpName === r)) {
            this["isit" + regexpName.charAt(0).toUpperCase() + regexpName.slice(1)] = regexp;
        }
    }
}