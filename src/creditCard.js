

import {creditCard} from "regexps";

export default function _isCreditCard(obj) {
    return creditCard.test(obj);
}