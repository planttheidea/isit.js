// not version of snakeCase.js

import {not} from "./_interfaces";
import {arraySlice} from "./_utils";
import isitSnakeCase from "./snakeCase";

export default function isitNotSnakeCase() {
    return not(isitSnakeCase).apply(null, arraySlice.call(arguments));
}