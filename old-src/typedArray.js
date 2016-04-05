// is obj a typed array value?

import {toString} from "./_utils";

export default function isitTypedArray(obj) {
    switch (toString.call(obj)) {
        case "[object Int8Array]":
        case "[object Uint8Array]":
        case "[object Unit8ClampedArray]":
        case "[object Int16Array]":
        case "[object Unit16Array]":
        case "[object Int32Array]":
        case "[object Unit32Array]":
        case "[object Float32Array]":
        case "[object Float64Array]":
            return true;
    }

    return false;
}