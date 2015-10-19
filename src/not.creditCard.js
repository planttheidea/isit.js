// not version of creditcard.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitCreditCard from "./creditCard";

export default function isitNotCreditCard() {
    return not(isitCreditCard).apply(null, arraySlice.call(arguments));
}