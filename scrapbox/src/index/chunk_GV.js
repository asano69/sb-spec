import { b } from "../chunks/chunk-3PYJHPBQ.js";
import { a, e } from "../chunks/chunk-FXCI2R73.js";
const GV = e(b(), 1);
const cve = /^https:\/\/(?:www\.|mobile\.|m\.|)(?:twitter|x)\.com\/([A-Za-z0-9_]*)\/(?:status|statuses)\/\d+/;
export const JS = a((e)=>cve.test(e), "isTwitterURL");
export function VA({ url }) {
    if (JS(url)) {
        return GV.default.createElement("i", {
            className: "fab fa-twitter favicon"
        });
    }
    return null;
}
