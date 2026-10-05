import { Za } from "../chunks/chunk-3PYJHPBQ.js";
import { e } from "../chunks/chunk-FXCI2R73.js";
export const A$ = [
    "http:",
    "https:",
    "mailto:"
];
const Lfe = {
    codeblock: /^\s*code:\s*[^\s+]/,
    tableblock: /^\s*table:\s*[^\s+]/
};
const Mfe = {
    heading: /^#{1,6}\s[^\s]+$/,
    listItemDash: /^\s*-\s.+$/,
    listItemAsterisk: /^\s*\*\s.+$/,
    strong: /\*\*.+?\*\*/g
};
export function Dfe(e) {
    let t = e.split(`
`);
    if (t.length < 2) {
        return false;
    }
    for (let r of t){
        for (let n of Object.values(Lfe)){
            if (n.test(r)) {
                return false;
            }
        }
    }
    for (let r of t){
        for (let n of Object.values(Mfe)){
            if (n.test(r)) {
                return true;
            }
        }
    }
    return false;
}
export const dH = e(Za(), 1);
