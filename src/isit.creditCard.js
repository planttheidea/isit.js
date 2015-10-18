

import {creditCard} from "regexps";

export default function isCreditCard(obj) {
    return creditCard.test(obj);
}