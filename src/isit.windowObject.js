

export default function isWindowObject(obj) {
    return typeof obj === "object" && "setInterval" in obj;
}