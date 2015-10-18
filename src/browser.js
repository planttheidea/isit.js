// is the environment a browser?

export default function isitBrowser() {
    return typeof window !== "undefined";
}