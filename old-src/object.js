// is obj an object value?
// NOTE: will return true for functions as well

export default function isitObject(obj) {
    let type = typeof obj;

    return type === "function" || type === "object";
}