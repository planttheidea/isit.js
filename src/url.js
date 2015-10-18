// is obj a valid URL?
// NOTE: this is a little wonky, I can't seem to find a solid regex to encompass all possible values

import {url} from "./_regexps";

export default function isitUrl(obj) {
    return url.test(obj);
}