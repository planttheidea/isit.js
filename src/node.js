// is the environment not a browser (meaning its likely server-side, or NodeJS)?

export default function isitNode() {
    return typeof window === "undefined";
}