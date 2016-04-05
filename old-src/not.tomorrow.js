// not version of tomorrow.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitTomorrow from "./tomorrow";

export default function isitNotTomorrow() {
    return not(isitTomorrow).apply(null, arraySlice.call(arguments));
}