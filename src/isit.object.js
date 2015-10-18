

export default function isObject(obj) {
    let type = typeof obj;
    return type === "function" || type === "object";
}