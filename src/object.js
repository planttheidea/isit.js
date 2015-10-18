

export default function isitObject(obj) {
    let type = typeof obj;

    return type === "function" || type === "object";
}