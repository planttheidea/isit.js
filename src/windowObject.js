

export default function isitWindowObject(obj) {
    return typeof obj === "object" && "setInterval" in obj;
}