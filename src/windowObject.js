

export default function _isWindowObject(obj) {
    return typeof obj === "object" && "setInterval" in obj;
}