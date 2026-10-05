import { Ba } from "../chunks/chunk-3PYJHPBQ.js";
import { a } from "../chunks/chunk-FXCI2R73.js";
import { kp } from "./chunk_bq.js";
const Mme = [
    "gyazo",
    "image",
    "youtube",
    "vimeo",
    "video",
    "audio",
    "spotify",
    "anchor-fm"
];
export function _R(e) {
    let t = Ba(`[${e}]`);
    if (Mme.includes(t.type)) {
        return `[${e}]
`;
    }
    return e;
}
export const ER = a((e)=>{
    try {
        new URL(e);
        return kp(e);
    } catch  {
        return e;
    }
}, "decodeEncodedUrl");
