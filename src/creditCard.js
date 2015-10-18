// is obj a valid credit card number?

import {creditCard} from "./regexps";

export default function isitCreditCard(obj) {
    return creditCard.test(obj);
}