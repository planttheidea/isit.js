

export default function _isObject(obj) {
    let type = typeof obj;

    return type === "function" || type === "object";
}