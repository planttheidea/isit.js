

import {months} from "dateNames";
import isitDate from "date";
import isitString from "string";

export default function isitMonth(obj, monthString) {
    return isitDate(obj) && isitString(monthString) && monthString.toLowerCase() === months[obj.getMonth()];
}